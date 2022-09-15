using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;


namespace WebAPI.Controllers
{
    public class VolunteersController : ApiController
    {
        static readonly IVolunteerRepository repository = new VolunteerRepository();
        public IEnumerable<Volunteer> GetAllVolunteers()
        {
            return repository.GetAll();
        }
        public Volunteer GetProduct(string email)
        {
            Volunteer item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }


       
        public HttpResponseMessage PostVolunteer(Volunteer item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<Volunteer>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { email = item.Email });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutVolunteerEmail(string email, Volunteer volunteer)
        {
            volunteer.Email = email;
            if (!repository.Update(volunteer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutVolunteerPassword(string password, Volunteer volunteer)
        {
            volunteer.Password = password;
            if (!repository.Update(volunteer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutVolunteerCity(string city, Volunteer volunteer)
        {
            volunteer.City = city;
            if (!repository.Update(volunteer))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void DeleteVolunteer(string email)
        {
            Volunteer item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(email);
        }
    }
}
