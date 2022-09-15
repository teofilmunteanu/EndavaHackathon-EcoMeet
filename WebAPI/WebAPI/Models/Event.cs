using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Event
    {
		public int Id { get; set; }
		public Organizer Organizer { get; set; }
		public string Title { get; set; }
		public string Location { get; set; }
		public string Description { get; set; }
		public string Section { get; set; }
		public int MaxParticipats { get; set; }
		public int CurrentNumberOfParticipants { get; set; }
		public DateTime DateTime { get; set; }
	}
}
