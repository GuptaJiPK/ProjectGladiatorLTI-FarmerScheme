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
    public class ClaimInsuranceDetailsController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public ClaimInsuranceDetailsController(FarmerSchemeContext context)
        {
            db = context;
        }


        [HttpGet]
        public IActionResult GetDetails(int appid)
        {
            var IsInClaimed = db.InsuranceClaims.FirstOrDefault(x => x.PolicyNo == appid);
            var IsInsurance = db.Insurances.FirstOrDefault(x => x.IapplicationId == appid);
            dynamic result;
            if (IsInClaimed == null && IsInsurance != null)
            {
                try
                {
                    result = (from i in db.Insurances
                              join u in db.Users
                              on i.UserId equals u.UserId
                              select new
                              {
                                  policyno = i.IapplicationId,
                                  userid = i.UserId,
                                  suminsured = i.SumInsuredPerHectare,
                                  fname = u.FirstName,
                                  lname = u.LastName
                              });
                }
                catch (Exception)
                {
                    return NotFound("No Details Found!!!");
                }
                return Ok(result);
            }
            return Ok();

        }

        [HttpPost]
        public IActionResult PostDetails(InsuranceClaim insuranceClaim)
        {

            var sumins = db.Insurances.Where(t => t.SumInsuredPerHectare == insuranceClaim.SumInsured).FirstOrDefault();
            var appid = db.Insurances.Where(t => t.IapplicationId == insuranceClaim.PolicyNo).FirstOrDefault();
            //check for farmerid in session matches with farmerid in tblinsurance(this says he applied for insurance)
            if (appid != null)
            {
                if (sumins != null)
                {
                    insuranceClaim.ClaimStatus = "pending";
                    Convert.ToDecimal(insuranceClaim.SumInsured);
                    db.InsuranceClaims.Add(insuranceClaim);
                    db.SaveChanges();
                    return Ok("your insurance request is placed");

                }
                else { return NotFound("you should enter the correct suminsured by company"); }
            }
            else { return NotFound("policy no mismatch"); }
        }
    }
}
