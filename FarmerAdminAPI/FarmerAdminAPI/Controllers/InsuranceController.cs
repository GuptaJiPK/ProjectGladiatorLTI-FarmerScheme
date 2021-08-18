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
    public class InsuranceController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public InsuranceController(FarmerSchemeContext context)
        {
            db = context;
        }


        [HttpPost("{useremail}")]
        public IActionResult PostInsurance(string useremail, [FromBody] Insurance insurance)
        {
            try
            {
                var msp = db.CropDetails.Where(c => c.CropName == insurance.CropName).Select(t => t.MspPerQuintal).FirstOrDefault();
                var yeild = db.CropDetails.Where(c => c.CropName == insurance.CropName).Select(t => t.YeildPerHectareTons).FirstOrDefault();
                var cropid = db.CropDetails.Where(c => c.CropName == insurance.CropName).Select(t => t.CropId).FirstOrDefault();
                var userid = db.Users.Where(u => u.Email == useremail).Select(t => t.UserId).FirstOrDefault();

                insurance.SumInsuredPerHectare = Convert.ToDecimal((msp) * Convert.ToDecimal(yeild) * 10);
                insurance.CropId = Convert.ToInt32(cropid);
                insurance.UserId = Convert.ToInt32(userid);

                db.Insurances.Add(insurance);
                db.SaveChanges();
                return Ok(insurance.IapplicationId);

            }
            catch (Exception) { return NotFound(); }

        }

    }
}

