namespace API.Exceptions;

public class APIException(int statusCode, string message, string? details = null)
{
    public int statusCode { get; set; } = statusCode;
    public string Message { get; set; } = message;

    public string? Details { get; set; } = details;
}
