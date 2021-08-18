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
    public class BidderWelcomeController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public BidderWelcomeController(FarmerSchemeContext context)
        {
            db = context;
        }
        [HttpGet]
        public IActionResult CropBid([FromQuery(Name = "CropId")] string crpid)
        {
            dynamic res;
            try
            {
                res = from b in db.Bids
                      join c in db.CropForSales
                      on b.CropId equals c.CropId
                      select new
                      {
                          cropid = c.CropId,
                          cropname = c.CropName,
                          croptype = c.CropType,
                          BaseMSp = c.Msp,
                          CurrentBid = b.BidAmount
                      };
            }
            catch (Exception e)
            {
                return NotFound("No Found Details!!!!");
            }
            return Ok(res);
        }
    }
}
