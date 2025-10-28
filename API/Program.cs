using System.Text;
using API.Data;
using API.Interfaces;
using API.Middlewares;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(); // agregar controladores
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")); // usar sqlite y la cadena de conexion del appsettings.json
});
// agregar el contexto de la base de datos

builder.Services.AddCors(); // agregar CORS
builder.Services.AddScoped<ITokenService, TokenService>(); // agregar el servicio de token como singleton
builder.Services.AddScoped<IMembersRepository, MemberRepository>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    var tokenKey = builder.Configuration["TokenKey"] ?? throw new ArgumentNullException("Cannot get the token key - Program.cs");
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});


var app = builder.Build();
// Configure the HTTP request pipeline.
//app.UseDeveloperExceptionPage(); usar la pagina de excepciones para desarrolladores, en launchsettings.json debe estar en Development y no en Production

app.UseMiddleware<ExceptionMiddleware>(); // usar el middleware de excepciones personalizado
app.UseCors(x => x.AllowAnyHeader().
    AllowAnyMethod().
    WithOrigins("http://localhost:4200",
    "https://localhost:4200"
));

// permitir cualquier cabecera y metodo desde el origen especificado

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedUsers(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "Migration process failed!");
}

app.Run();