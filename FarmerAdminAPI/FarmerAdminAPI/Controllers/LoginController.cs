using FarmerAdminAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace FarmerAdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly FarmerSchemeContext db;

        public LoginController(FarmerSchemeContext context)
        {
            db = context;
        }


        [HttpGet]
        [Route(("{email}/{password}"))]
        public IActionResult Login(string email, string password)
        {

            var user = (from u in db.Users where u.Email == email select new { u.UserId, u.Roles }).SingleOrDefault();
            User user1 = db.Users.Find(user.UserId);
            if (user1.Password == password)
            {
                return Ok(user);
            }
            else return Ok(false);

        }



    }

}



