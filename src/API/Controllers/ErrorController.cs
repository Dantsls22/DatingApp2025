using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : BaseApiController
{
<<<<<<< HEAD
    [HttpGet("bad-request")]
    public IActionResult GetBadRequest() //400
    {
        //throw new Exception("Invalid request");
        return BadRequest("bad request");
    }

    [HttpGet("not-found")]
    public IActionResult GetNotFound() //404
=======

    [HttpGet("bad-request")]
    public IActionResult GetBadRequest() // 400
    {
        // var inputParam = -1;
        // if (inputParam <= 0) throw new ArgumentOutOfRangeException(nameof(inputParam));
        
        return BadRequest("Bad request");
    }

    [HttpGet("auth")]
    public IActionResult GetAuth() // 401
    {
        return Unauthorized();
    }

    [HttpGet("not-found")]
    public IActionResult GetNotFound() // 404
>>>>>>> basaar/parcial05
    {
        return NotFound();
    }

    [HttpGet("server-error")]
<<<<<<< HEAD
    public IActionResult GetServerError() //500
    {
        throw new Exception("Server error");
    }

    [HttpGet("auth")]
    public IActionResult GetAuth() //401
    {
        return Unauthorized();
    }


=======
    public IActionResult GetServerError() // 500
    {
        throw new Exception("Server error");
    }
>>>>>>> basaar/parcial05
}