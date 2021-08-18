using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class User
    {
        public User()
        {
            BidCrops = new HashSet<BidCrop>();
            Bids = new HashSet<Bid>();
            CropForSales = new HashSet<CropForSale>();
            Insurances = new HashSet<Insurance>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }
        public string AadharCard { get; set; }
        public string PanCard { get; set; }
        public string Certificate { get; set; }
        public string TraderLicense { get; set; }
        public string Password { get; set; }
        public string VerificationStatus { get; set; }
        public string ApprovedBy { get; set; }
        public DateTime? ApprovedDate { get; set; }
        public string Roles { get; set; }
        public string AccountNo { get; set; }
        public string IfscCode { get; set; }
        public string LandArea { get; set; }
        public string LandAddress { get; set; }
        public string LandPincode { get; set; }

        public virtual ICollection<BidCrop> BidCrops { get; set; }
        public virtual ICollection<Bid> Bids { get; set; }
        public virtual ICollection<CropForSale> CropForSales { get; set; }
        public virtual ICollection<Insurance> Insurances { get; set; }
    }
}
