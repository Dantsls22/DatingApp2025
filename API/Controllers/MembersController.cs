using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;

namespace API.Controllers;

[Authorize]
public class MembersController(IMembersRepository membersRepository) : BaseApiController
{
    [AllowAnonymous]
    [HttpGet] //primer endpoint: localhost:5000/api/members
    public async Task<ActionResult<IReadOnlyList<Member>>> GetMembers() //metodo para obtener todos los miembros
    //la lista contiene appuser
    //con IReadOnlyList se usa menos memoria que con List
    {
        return Ok(await membersRepository.GetMembersAsync()); 
        
        //devuelve la lista de miembros con un estado 200 OK
    }

    //[AllowAnonymous]
    [HttpGet("{id}")] //https://localhost:5000/api/members/bob-id
    public async Task<ActionResult<Member>> GetMember(string id)
    {
        //?? es un operador muy util
        var member = await membersRepository.GetMemberAsync(id); // ?? throw new ArgumentNullException(); //busca un usuario por su id

        if (member == null) return NotFound();
        //si no encuentra el usuario, devuelve un estado 404 Not Found

        return member; //devuelve el usuario encontrado
    }
    //[AlloAnonymus]
    [HttpGet("{id}/photos")]
    public async Task<ActionResult<IReadOnlyList<Photo>>> GetPhotos(string id)
    {
        return Ok(await membersRepository.GetPhotosAsync(id));
    }
}
