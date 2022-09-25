using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Organizer
    {
        public Organizer()
        {
            EventsNavigation = new HashSet<Event>();
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string OrganizationName { get; set; } = null!;
        public string City { get; set; } = null!;
        public string? Events { get; set; }
        [Required]
        public int? AdministratorId { get; set; }

        public virtual Administrator? Administrator { get; set; }
        public virtual ICollection<Event> EventsNavigation { get; set; }
    }
}
