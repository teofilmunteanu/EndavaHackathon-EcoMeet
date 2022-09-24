using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Collaborator
    {
        public Collaborator()
        {
            Shop_items = new HashSet<Shop_item>();
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string OrganizationName { get; set; } = null!;
        public int AdministratorId { get; set; }

        public virtual Administrator Administrator { get; set; } = null!;
        public virtual ICollection<Shop_item> Shop_items { get; set; }
    }
}
