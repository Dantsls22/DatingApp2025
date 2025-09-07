using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Entities.AppUser> Users { get; set; }
    }
}
// DbContext es la clase base para trabajar con Entity Framework Core
// DbSet representa una coleccion de entidades de un tipo especifico
