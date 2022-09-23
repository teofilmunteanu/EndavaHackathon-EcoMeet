﻿using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Administrator
    {
        public Administrator()
        {
            Collaborators = new HashSet<Collaborator>();
            Organizers = new HashSet<Organizer>();
        }

        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;

        public virtual ICollection<Collaborator> Collaborators { get; set; }
        public virtual ICollection<Organizer> Organizers { get; set; }
    }
}
