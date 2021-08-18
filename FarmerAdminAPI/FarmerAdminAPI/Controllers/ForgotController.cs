using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Net.Mail;
using System.Net;
using FarmerAdminAPI.Models;

namespace BidderAPIApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForgotController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public ForgotController(FarmerSchemeContext context)
        {
            db = context;
        }
        [HttpGet]
        [Route("forgotpassword")]
        public IActionResult RegisterByEmail([FromQuery(Name = "email")] string eml)
        {
            User gm = db.Users.Where(a => a.Email == eml).FirstOrDefault();
            if (gm == null) return BadRequest("invalid email address");
            string to = eml;

            using SmtpClient email = new SmtpClient
            {
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                EnableSsl = true,
                Host = "smtp.gmail.com",
                Port = 587,
                Credentials = new NetworkCredential("farmertesting201@gmail.com", "Testing@asdf"),
            };

            string subject = "Your Email password";
            string password = gm.Password;

            string body = "Password  " + password;
            try
            {
                email.Send("farmertesting201@gmail.com", to, subject, body);
                return Ok("Email Sent");
            }
            catch (Exception e)
            {
                return BadRequest("otp not sent");
            }
        }
    }
}