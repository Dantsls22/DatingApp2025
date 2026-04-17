using System.Security.Claims;
<<<<<<< HEAD
using API.Entities;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions 
    {
        public static string GetMemberId(this ClaimsPrincipal user)
        {
            return user.FindFirstValue(ClaimTypes.NameIdentifier) 
                    ?? throw new ArgumentException("MemberId not available in token"); 
        }
=======

namespace API.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static string GetMemberId(this ClaimsPrincipal user)
    {
        return user.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? throw new ArgumentException("MemberId not available in token");
>>>>>>> basaar/parcial05
    }
}