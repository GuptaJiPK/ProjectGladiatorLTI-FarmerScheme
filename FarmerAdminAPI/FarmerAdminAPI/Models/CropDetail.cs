using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class CropDetail
    {
        public int Id { get; set; }
        public int? CropId { get; set; }
        public string CropType { get; set; }
        public string CropName { get; set; }
        public decimal MspPerQuintal { get; set; }
        public double ActuarialRatePercentage { get; set; }
        public double YeildPerHectareTons { get; set; }

        public virtual CropForSale Crop { get; set; }
    }
}
