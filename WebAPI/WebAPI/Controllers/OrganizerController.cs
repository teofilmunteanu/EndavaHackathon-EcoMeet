using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    public class OrganizerController : ApiController
    {
        static readonly IOrganizerRepository repository = new OrganizerRepository();
        public IEnumerable<Organizer> GetAllOrganizers()
        {
            return repository.GetAll();
        }
        public Organizer GetProduct(string email)
        {
            Organizer item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }



        public HttpResponseMessage PostOrganizer(Organizer item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<Organizer>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { email = item.Email });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutOrganizerEmail(string email, Organizer Organizer)
        {
            Organizer.Email = email;
            if (!repository.Update(Organizer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutOrganizerPassword(string password, Organizer Organizer)
        {
            Organizer.Password = password;
            if (!repository.Update(Organizer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutOrganizerOrganizationName(string name, Organizer Organizer)
        {
            Organizer.OrganizationName = name;
            if (!repository.Update(Organizer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutOrganizerCity(string city, Organizer Organizer)
        {
            Organizer.City = city;
            if (!repository.Update(Organizer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutOrganizerEvent(Event event1, Organizer organizer)
        {
            organizer.Events.Add(event1);
            if (!repository.Update(organizer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public void DeleteOrganizer(string email)
        {
            Organizer item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(email);
        }
    }
}
