using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class LandDetail
    {
        public int LandId { get; set; }
        public int? UserId { get; set; }
        public double LandArea { get; set; }
        public string LandAddress { get; set; }
        public int LandPincode { get; set; }

        public virtual User User { get; set; }
    }
}
