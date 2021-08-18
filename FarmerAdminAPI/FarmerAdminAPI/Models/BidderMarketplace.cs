using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class BidderMarketplace
    {
        public int BidId { get; set; }
        public int? CropId { get; set; }
        public int? UserId { get; set; }
        public decimal? Msp { get; set; }
        public decimal? CurrentBid { get; set; }
        public decimal? FinalBid { get; set; }
        public decimal? PreviousBids { get; set; }
        public DateTime? DateOfBid { get; set; }
        public string ApprovalStatus { get; set; }

        public virtual CropForSale Crop { get; set; }
        public virtual User User { get; set; }
    }
}
