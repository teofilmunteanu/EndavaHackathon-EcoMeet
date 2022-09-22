using System;
using System.Collections.Generic;

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
        public string AdministratorEmail { get; set; } = null!;

        public virtual Administrator AdministratorEmailNavigation { get; set; } = null!;
        public virtual ICollection<Event> EventsNavigation { get; set; }
    }
}
