using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    public class EventsController : ApiController
    {
        static readonly IEventRepository repository = new EventRepository();
        public IEnumerable<Event> GetAllEvents()
        {
            return repository.GetAll();
        }
        public Event GetProduct(int id)
        {
            Event item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }



        public HttpResponseMessage PostEvent(Event item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<Event>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { id = item.Id });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutEventId(int id, Event Event)
        {
            Event.Id = id;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutEventDescription(string description, Event Event)
        {
            Event.Description = description;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutEventTitle(string title, Event Event)
        {
            Event.Title = title;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutEventCurrentNumberOfParticipants(int currentNumberOfParticipants, Event Event)
        {
            Event.CurrentNumberOfParticipants = currentNumberOfParticipants;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutEventMaxParticipants(int maxParticipants, Event Event)
        {
            Event.MaxParticipants = maxParticipants;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutEventLocation(string location, Event Event)
        {
            Event.Location = location;
            if (!repository.Update(Event))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void DeleteEvent(int id)
        {
            Event item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(id);
        }
    }
}
