using FarmerAdminAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmerAdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BidController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public BidController(FarmerSchemeContext context)
        {
            db = context;
        }

        [HttpPost("{useremail}")]
        public IActionResult PostCropId(string useremail,[FromBody] Bid bid)
        {
            var cropid = db.CropForSales.Where(c => c.CropName == bid.CropName).Select(t => t.CropId).FirstOrDefault();
            var userid = db.Users.Where(u => u.Email == useremail).Select(t => t.UserId).FirstOrDefault();
            bid.CropId = Convert.ToInt32(cropid);
            bid.UserId = Convert.ToInt32(userid);
            db.Bids.Add(bid);
            db.SaveChanges();
            return Ok(bid.BId1);
        }
    }
}
