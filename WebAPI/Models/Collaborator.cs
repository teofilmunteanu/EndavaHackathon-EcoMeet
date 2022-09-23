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
        public int AdministratorId { get; set; }

        public virtual Administrator Administrator { get; set; } = null!;
        public virtual ICollection<Shopitem> Shopitems { get; set; }
    }
}
