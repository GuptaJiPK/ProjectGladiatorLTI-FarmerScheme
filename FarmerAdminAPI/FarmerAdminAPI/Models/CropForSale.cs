using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class CropForSale
    {
        public CropForSale()
        {
            BidCrops = new HashSet<BidCrop>();
            Bids = new HashSet<Bid>();
            CropDetails = new HashSet<CropDetail>();
            Insurances = new HashSet<Insurance>();
        }

        public int CropId { get; set; }
        public int? UserId { get; set; }
        public string CropType { get; set; }
        public string CropName { get; set; }
        public double Quantity { get; set; }
        public string FertilizerType { get; set; }
        public string SoilPhcertificate { get; set; }
        public DateTime DateOfSoldCrop { get; set; }
        public decimal? Msp { get; set; }
        public decimal? SoldPrice { get; set; }
        public decimal? TotalPrice { get; set; }
        public string StatusOfCropSell { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<BidCrop> BidCrops { get; set; }
        public virtual ICollection<Bid> Bids { get; set; }
        public virtual ICollection<CropDetail> CropDetails { get; set; }
        public virtual ICollection<Insurance> Insurances { get; set; }
    }
}
