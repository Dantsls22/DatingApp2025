using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : BaseApiController
{
    [HttpGet("bad-request")]
    public IActionResult GetBadRequest() //400
    {
        //throw new Exception("Invalid request");
        return BadRequest("bad request");
    }

    [HttpGet("not-found")]
    public IActionResult GetNotFound() //404
    {
        return NotFound();
    }

    [HttpGet("server-error")]
    public IActionResult GetServerError() //500
    {
        throw new Exception("Server error");
    }

    [HttpGet("auth")]
    public IActionResult GetAuth() //401
    {
        return Unauthorized();
    }


}