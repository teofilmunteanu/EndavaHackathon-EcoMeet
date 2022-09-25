using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Event
    {
        public Event()
        {
            VolunteersEmails = new HashSet<Volunteer>();

        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Location { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int PointsGiven { get; set; }
        public string Type { get; set; } = null!;
        public int MaxParticipants { get; set; }
        public int CurrentNumberOfParticipants { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public DateTime ScheduleStart { get; set; }
        public DateTime ScheduleEnd { get; set; }
        public string? Sponsors { get; set; }
        [Required]
        public string? OrganizerEmail { get; set; }

        public virtual Organizer? OrganizerEmailNavigation { get; set; }

        public virtual ICollection<Volunteer> VolunteersEmails { get; set; }
    }
}
