using Microsoft.AspNetCore.Mvc;
using System;

[ApiController]
[Route("/api/[controller]")]
public class LoginController : ControllerBase
{
    [HttpPost]
    public ActionResult Post([FromHeader] string Authorization)
    {
        (string username, string password) = GetUsernameAndPasswordFromAuthorizeHeader(Authorization);
        if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
        {
            Console.WriteLine($"User authorized: {username}");
            return Ok();
        }
        return BadRequest();
    }

    public static (string, string) GetUsernameAndPasswordFromAuthorizeHeader(string authorizeHeader)
    {
        if (authorizeHeader == null || !authorizeHeader.Contains("Basic "))
            return (null, null);

        string encodedUsernamePassword = authorizeHeader.Substring("Basic ".Length).Trim();
        System.Text.Encoding ISO_8859_1_ENCODING = System.Text.Encoding.GetEncoding("ISO-8859-1");
        string usernamePassword = ISO_8859_1_ENCODING.GetString(Convert.FromBase64String(encodedUsernamePassword));

        string username = Uri.UnescapeDataString(usernamePassword.Split(':')[0]);
        string password = Uri.UnescapeDataString(usernamePassword.Split(':')[1]);

        return (username, password);
    }
}