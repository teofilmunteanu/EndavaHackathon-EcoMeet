using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Volunteer
    {
        public Volunteer()
        {
            Achievements = new HashSet<Achievement>();
            Events = new HashSet<Event>();
            Level = 1;
            Points = 0;
        }

        public string Email { get; set; } 
        public string Password { get; set; } 
        public string Username { get; set; } 
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string City { get; set; } 
        public int Level { get; set; }
        public int Points { get; set; }

        public virtual ICollection<Achievement> Achievements { get; set; }

        public virtual ICollection<Event> Events { get; set; }
    }
}
