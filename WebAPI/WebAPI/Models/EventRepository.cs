using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class EventRepository : IEventRepository
    {
        private List<Event> Events = new List<Event>();


        public EventRepository()
        {
            Add(new Event {Id = 1, Title = "Plantare", Location = "Iasi", Description = "Plantam copaci",Section="Plantare Copaci",MaxParticipants=50,CurrentNumberOfParticipants=16,DateTime=DateTime.Now, Organizer = new Organizer { OrganizationName = "MarcelProd" } });
            // Add(new Event {Id = 1, Title = "Plantare", Location = "Iasi", Description = "Plantam copaci",Section="Plantare Copaci",MaxParticipats=50,CurrentNumberOfParticipants=16,DateTime=DateTime.Now, Organizer = new Organizer { OrganizationName = "MarcelProd" } });


        }

        public IEnumerable<Event> GetAll()
        {
            return Events;
        }

        public Event Get(int id)
        {
            return Events.Find(p => p.Id==id);
        }

        public Event Add(Event item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            Events.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            Events.RemoveAll(p => p.Id == id);
        }

        public bool Update(Event item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int check = Events.FindIndex(p => p.Id==item.Id);
            if (check == -1)
            {
                return false;
            }
            Events.RemoveAt(check);
            Events.Add(item);
            return true;
        }
    }
}