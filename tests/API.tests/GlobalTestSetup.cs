using API.Data;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace API.tests;
[SetUpFixture]
public class GlobalTestSetup
{
    public static AppDbContext AppDbContext { get; private set; }
    [OneTimeSetUp]

    public async Task SetUp()
    {
        DbContextOptions<AppDbContext> options = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite("Data source=dating.db")
        .Options;

        AppDbContext = new AppDbContext(options);
        await AppDbContext.Database.MigrateAsync();
    }

    [OneTimeTearDown]
    public async Task TearDown()
    {
        await AppDbContext.DisposeAsync();
    }


}
