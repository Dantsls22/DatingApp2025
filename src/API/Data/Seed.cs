using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore.Metadata;
=======
>>>>>>> basaar/parcial05

namespace API.Data;

public class Seed
{
    public static async Task SeedUsers(AppDbContext context)
    {
        if (await context.Users.AnyAsync()) return;

<<<<<<< HEAD
        var seedUserData = await File.ReadAllTextAsync("Data/UserSeedData.json");
        var seedUsers = JsonSerializer.Deserialize<List<SeedUserDto>>(seedUserData);
=======
        var seedUsersData = await File.ReadAllTextAsync("Data/UserSeedData.json");
        var seedUsers = JsonSerializer.Deserialize<List<SeedUserDto>>(seedUsersData);
>>>>>>> basaar/parcial05

        if (seedUsers == null)
        {
            Console.WriteLine("No seed data available");
            return;
        }

        foreach (var seedUser in seedUsers)
        {
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                Id = seedUser.Id,
                Email = seedUser.Email,
                DisplayName = seedUser.DisplayName,
                ImageUrl = seedUser.ImageUrl,
<<<<<<< HEAD
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("password")),
=======
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd")),
>>>>>>> basaar/parcial05
                PasswordSalt = hmac.Key,
                Member = new Member
                {
                    Id = seedUser.Id,
                    DisplayName = seedUser.DisplayName,
                    Gender = seedUser.Gender,
                    City = seedUser.City,
                    Country = seedUser.Country,
                    Description = seedUser.Description,
<<<<<<< HEAD
                    BirthDate = seedUser.BirthDate,
=======
                    BirthDay = seedUser.BirthDay,
>>>>>>> basaar/parcial05
                    ImageUrl = seedUser.ImageUrl,
                    LastActive = seedUser.LastActive,
                    Created = seedUser.Created
                }
            };
<<<<<<< HEAD
=======

>>>>>>> basaar/parcial05
            user.Member.Photos.Add(new Photo
            {
                Url = seedUser.ImageUrl!,
                MemberId = seedUser.Id
            });

            context.Users.Add(user);
        }
<<<<<<< HEAD
        await context.SaveChangesAsync();
    }
}
=======

        await context.SaveChangesAsync();
    }
}
>>>>>>> basaar/parcial05
