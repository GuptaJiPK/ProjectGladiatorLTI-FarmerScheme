using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class Insurance
    {
        public Insurance()
        {
            InsuranceClaims = new HashSet<InsuranceClaim>();
        }

        public int IapplicationId { get; set; }
        public int? CropId { get; set; }
        public int? UserId { get; set; }
        public string Year { get; set; }
        public string Season { get; set; }
        public double Area { get; set; }
        public decimal? SumInsuredPerHectare { get; set; }
        public string CropType { get; set; }
        public string CropName { get; set; }

        public virtual CropForSale Crop { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<InsuranceClaim> InsuranceClaims { get; set; }
    }
}
