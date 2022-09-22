using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Shopitem
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Price { get; set; }
        public string Description { get; set; } = null!;
        public string CollaboratorEmail { get; set; } = null!;

        public virtual Collaborator CollaboratorEmailNavigation { get; set; } = null!;
    }
}
