using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using FarmerAdminAPI.Models;

namespace FarmerAdminApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViewMarketplaceController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public ViewMarketplaceController(FarmerSchemeContext context)
        {
            db = context;
        }
        [HttpGet]
        public IActionResult CropBid([FromQuery(Name = "CropId")] int crpid)
        {
            dynamic res;
            try
            {
                /*res = from c in db.CropForSales
                      join b in db.Bids
                      on c.UserId equals b.UserId
                      join bc in db.BidCrops
                      on b.CropId equals bc.CropId
                      where (c.CropId == crpid)
                      select new
                      {
                          cropid = c.CropId,
                          cropname = c.CropName,
                          croptype = c.CropType,
                          CurrentBid = b.BidAmount,
                          baseprice = bc.BasePriceAsMsp,
                          bidstatus = bc.BidStatus,
                          bidderid = b.UserId,
                          bidamt = b.BidAmount
                      };*/

                res = from c in db.CropForSales
                      join b in db.Bids
                      on c.CropId equals b.CropId
                      join bc in db.BidCrops
                      on b.CropId equals bc.CropId
                      where (c.CropId == crpid)
                      select new
                      {
                          cropid = c.CropId,
                          cropname = c.CropName,
                          croptype = c.CropType,
                          
                          CurrentBid = b.BidAmount,
                          baseprice = bc.BasePriceAsMsp,
                          bidstatus = bc.BidStatus,
                          bidderid = b.UserId,
                          bidamt = b.BidAmount,
                          finalbidamount = bc.FinalBidAmount

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
