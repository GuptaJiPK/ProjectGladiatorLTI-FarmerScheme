using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class NewSample
    {
        public DateTime DateOfLoss { get; set; }
        public string CauseOfLoss { get; set; }
    }
}
