using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(); // agregar controladores
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")); // usar sqlite y la cadena de conexion del appsettings.json
});
// agregar el contexto de la base de datos

builder.Services.AddCors(); // agregar CORS

var app = builder.Build();

app.UseCors(x => x.AllowAnyHeader().
AllowAnyMethod().
WithOrigins("http://localhost:4200",
"https://localhost:4200"));
// permitir cualquier cabecera y metodo desde el origen especificado

app.MapControllers();

app.Run();