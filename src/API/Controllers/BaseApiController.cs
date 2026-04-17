<<<<<<< HEAD
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
//con esto dejo más legible mi implementación de los controladores
//todos los controladores van a heredar de esta clase

=======
using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ServiceFilter(typeof(UserActivityLogger))]
>>>>>>> basaar/parcial05
[Route("api/[controller]")]
[ApiController]
public class BaseApiController : ControllerBase
{
<<<<<<< HEAD

}
=======
}
>>>>>>> basaar/parcial05
