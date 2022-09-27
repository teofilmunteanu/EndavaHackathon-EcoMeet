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
            CurrentNumberOfParticipants = 0;
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Location { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int? PointsGiven { get; set; }
        public string Type { get; set; } = null!;
        public int MaxParticipants { get; set; }
        public int CurrentNumberOfParticipants { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public TimeSpan ScheduleStart { get; set; }
        public TimeSpan ScheduleEnd { get; set; }
        public string? Sponsors { get; set; }
        [Required]
        public string? OrganizerEmail { get; set; }

        public virtual Organizer? OrganizerEmailNavigation { get; set; }

        public virtual ICollection<Volunteer> VolunteersEmails { get; set; }
    }
}
