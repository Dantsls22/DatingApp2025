using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extensions;

public static class AppUserExtensions
{
    public static UserResponse ToDto(this AppUser user, ITokenService tokenService)
    {
        return new UserResponse
        {
            Id = user.Id,
            Email = user.Email,
            DisplayName = user.DisplayName,
            Token = tokenService.CreateToken(user)
        };
    }
    //public static string ToMySpecialString(this DateTime dateTime)
    //{
      //  return dateTime.ToString("yyyy-MM-dd" + " Hola que tal");
    //}
}
