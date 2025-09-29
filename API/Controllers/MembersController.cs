using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers;

[Authorize]
public class MembersController(AppDbContext context) : BaseApiController
{
    [HttpGet] //primer endpoint: localhost:5000/api/members
    public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers() //metodo para obtener todos los miembros
    //la lista contiene appuser
    //con IReadOnlyList se usa menos memoria que con List
    {
        var members = await context.Users.ToListAsync(); //obtiene todos los usuarios de la base de datos y los convierte en una lista

        return Ok(members); //devuelve la lista de miembros con un estado 200 OK
    }

    [AllowAnonymous]
    [HttpGet("{id}")] //https://localhost:5000/api/members/bob-id
    public async Task<ActionResult<AppUser>> GetMember(string id)
    {

        var member = await context.Users.FindAsync(id); //busca un usuario por su id

        if (member == null) return NotFound(); //si no encuentra el usuario, devuelve un estado 404 Not Found

        return member; //devuelve el usuario encontrado

    }
}
