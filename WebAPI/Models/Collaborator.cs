using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Collaborator
    {
        public Collaborator()
        {
            Shopitems = new HashSet<Shopitem>();
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string OrganizationName { get; set; } = null!;
        public string AdministratorEmail { get; set; } = null!;

        public virtual Administrator AdministratorEmailNavigation { get; set; } = null!;
        public virtual ICollection<Shopitem> Shopitems { get; set; }
    }
}
