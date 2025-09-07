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

var app = builder.Build();

app.MapControllers();

app.Run();