<<<<<<< HEAD

using System.Collections.Generic;
=======
>>>>>>> basaar/parcial05
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore.Storage;
=======
>>>>>>> basaar/parcial05
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService(IConfiguration configuration) : ITokenService
{
    public string CreateToken(AppUser user)
    {
        var tokenKey = configuration["TokenKey"] ?? throw new ArgumentNullException("Cannot get the token key");
        if (tokenKey.Length < 64)
        {
<<<<<<< HEAD
            throw new ArgumentException("Token key must be at least 64 characters long");
=======
            throw new ArgumentException("The token key must be >= 64 chars");
>>>>>>> basaar/parcial05
        }
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));
        var claims = new List<Claim>
        {
            new(ClaimTypes.Email, user.Email),
<<<<<<< HEAD
            new(ClaimTypes.NameIdentifier, user.Id),
        };
        
        var creads = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
=======
            new(ClaimTypes.NameIdentifier, user.Id)
        };
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
>>>>>>> basaar/parcial05
        var tokenDescription = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(7),
<<<<<<< HEAD
            SigningCredentials = creads
        };
        
=======
            SigningCredentials = creds
        };
>>>>>>> basaar/parcial05
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescription);

        return tokenHandler.WriteToken(token);
    }
<<<<<<< HEAD
    
=======
>>>>>>> basaar/parcial05
}
