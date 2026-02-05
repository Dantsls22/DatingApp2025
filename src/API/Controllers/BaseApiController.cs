using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
//con esto dejo más legible mi implementación de los controladores
//todos los controladores van a heredar de esta clase

[Route("api/[controller]")]
[ApiController]
public class BaseApiController : ControllerBase
{

}