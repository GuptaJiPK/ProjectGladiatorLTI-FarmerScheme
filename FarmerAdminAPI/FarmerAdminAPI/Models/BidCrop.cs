using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class BidCrop
    {
        public int BcId { get; set; }
        public int? BId { get; set; }
        public int? UserId { get; set; }
        public int? CropId { get; set; }
        public decimal? BasePriceAsMsp { get; set; }
        public decimal? FinalBidAmount { get; set; }
        public string BidStatus { get; set; }

        public virtual Bid BIdNavigation { get; set; }
        public virtual CropForSale Crop { get; set; }
        public virtual User User { get; set; }
    }
}
