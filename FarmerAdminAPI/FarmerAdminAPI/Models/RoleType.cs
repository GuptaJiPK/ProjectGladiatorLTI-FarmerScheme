using System;
using System.Collections.Generic;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class RoleType
    {
        public int? UserId { get; set; }
        public string UserRole { get; set; }

        public virtual User User { get; set; }
    }
}
