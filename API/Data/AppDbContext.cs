using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}
// DbContext es la clase base para trabajar con Entity Framework Core
// DbSet representa una coleccion de entidades de un tipo especifico
