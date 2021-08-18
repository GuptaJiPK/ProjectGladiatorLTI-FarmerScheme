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
    public class InsuranceDetailsController : ControllerBase
    {
        private readonly FarmerSchemeContext db;
        public InsuranceDetailsController(FarmerSchemeContext context)
        {
            db = context;
        }

        calculateinsu ci = new calculateinsu();

        [HttpGet]
        [Route("{croptype}/{cropname}/{area}")]
        public IActionResult GetInsurance(string croptype, string cropname, double area)
        {

            ci.InsuranceCompany = "AGRICULTURE INSURANCE COMPANY";

            var msp = db.CropDetails.Where(c => c.CropName == cropname).Select(t => t.MspPerQuintal).FirstOrDefault();
            var yeild = db.CropDetails.Where(c => c.CropName == cropname).Select(t => t.YeildPerHectareTons).FirstOrDefault();
            var acturialrate = db.CropDetails.Where(c => c.CropName == cropname).Select(t => t.ActuarialRatePercentage).FirstOrDefault();
            ci.SumInsuredPerHectare = Convert.ToSingle((msp) * Convert.ToDecimal(yeild) * 10);

            if (croptype == "kharif")
            {
                ci.SumInsured = Convert.ToSingle((msp) * Convert.ToDecimal(yeild) * 10);
                var y = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(acturialrate) / 100));
                ci.PremiumAmount = Convert.ToSingle(y * (0.02));
                ci.SharePremium = Convert.ToSingle(y - ci.PremiumAmount);
                ci.SumInsured = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(area)));
                ci.PremiumAmount = Convert.ToSingle((Convert.ToDecimal(ci.PremiumAmount)) * (Convert.ToDecimal(area)));
                ci.SharePremium = Convert.ToSingle((Convert.ToDecimal(ci.SharePremium)) * (Convert.ToDecimal(area)));
                ci.CropName = (cropname);
                ci.Area = Convert.ToInt32(area);

            }
            else if (croptype == "rabi")
            {
                ci.SumInsured = Convert.ToSingle((msp) * Convert.ToDecimal(yeild) * 10);
                var y = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(acturialrate) / 100));
                ci.PremiumAmount = Convert.ToSingle(y * (0.015));
                ci.SharePremium = Convert.ToSingle(y - ci.PremiumAmount);
                ci.SumInsured = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(area)));
                ci.PremiumAmount = Convert.ToSingle((Convert.ToDecimal(ci.PremiumAmount)) * (Convert.ToDecimal(area)));
                ci.SharePremium = Convert.ToSingle((Convert.ToDecimal(ci.SharePremium)) * (Convert.ToDecimal(area)));
                ci.CropName = (cropname);
                ci.Area = Convert.ToInt32(area);

            }
            else
            {
                ci.SumInsured = Convert.ToSingle((msp) * Convert.ToDecimal(yeild) * 10);
                var y = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(acturialrate) / 100));
                ci.PremiumAmount = Convert.ToSingle(y * (0.05));
                ci.SharePremium = Convert.ToSingle(y - ci.PremiumAmount);
                ci.SumInsured = Convert.ToSingle(Convert.ToDecimal(ci.SumInsured) * (Convert.ToDecimal(area)));
                ci.PremiumAmount = Convert.ToSingle((Convert.ToDecimal(ci.PremiumAmount)) * (Convert.ToDecimal(area)));
                ci.SharePremium = Convert.ToSingle((Convert.ToDecimal(ci.SharePremium)) * (Convert.ToDecimal(area)));
                ci.CropName = (cropname);
                ci.Area = Convert.ToInt32(area);

            }
            return Ok(ci);


        }
    }
}
