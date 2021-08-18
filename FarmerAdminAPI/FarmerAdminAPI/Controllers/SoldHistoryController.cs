using FarmerAdminAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FarmerAdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoldHistoryController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public SoldHistoryController(FarmerSchemeContext context)
        {
            db = context;
        }
        /*[HttpGet]
        public IActionResult Soldhistory([FromQuery(Name = "FarmerId")] int Farmerid)
        {
            dynamic res;
            try
            {
                *//* res = from c in db.CropForSales
                       where (c.UserId == Farmerid && c.StatusOfCropSell == "approved")
                       select new
                       {
                           CropId = c.CropId,
                           CropName = c.CropName,
                           CropType = c.CropType,
                           SoldPrice = c.SoldPrice,
                       };*//*



                res = from bc in db.BidCrops
                      join c in db.CropForSales
                      on bc.CropId equals c.CropId
                      where (c.UserId == Farmerid && bc.BidStatus == "sold")
                      select new
                      {
                          cropid = c.CropId,
                          cropname = c.CropName,
                          croptype = c.CropType,
                          BaseMSp = c.Msp,
                          bidstatus = bc.BidStatus,
                          finalbidamount = bc.FinalBidAmount
                      };

            }
            catch (Exception e)
            {
                return NotFound("No Found Details!!!!");
            }

            return Ok(res);
        }*/

        [HttpGet]
        public IActionResult Soldhistory([FromQuery(Name = "FarmerId")] int Farmerid)
        {
            dynamic res;
            try
            {

                res = from bc in db.BidCrops
                      join c in db.CropForSales
                      on bc.CropId equals c.CropId
                      where (c.UserId == Farmerid && bc.BidStatus == "sold")
                      select new
                      {
                          cropid = c.CropId,

                          cropname = c.CropName,
                          croptype = c.CropType,
                          BaseMSp = c.Msp,
                          bidstatus = bc.BidStatus,
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