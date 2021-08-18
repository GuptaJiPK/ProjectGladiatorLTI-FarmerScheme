using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class Bid
    {
        public Bid()
        {
            BidCrops = new HashSet<BidCrop>();
        }

        public int BId1 { get; set; }
        public int? CropId { get; set; }
        public int? UserId { get; set; }
        public decimal BidAmount { get; set; }
        public DateTime DateOfBid { get; set; }
        public string BidStatus { get; set; }
        public string CropName { get; set; }

        public virtual CropForSale Crop { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<BidCrop> BidCrops { get; set; }
    }
}
