using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class InsuranceClaim
    {
        public int ClaimId { get; set; }
        public int? PolicyNo { get; set; }
        public string Icompany { get; set; }
        public string InsuranceName { get; set; }
        public DateTime DateOfLoss { get; set; }
        public string CauseOfLoss { get; set; }
        public decimal SumInsured { get; set; }
        public string ClaimStatus { get; set; }

        public virtual Insurance PolicyNoNavigation { get; set; }
    }
}
