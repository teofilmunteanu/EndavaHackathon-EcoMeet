using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AdministratorsController : ApiController
    {
        static readonly IAdministratorRepository repository = new AdministratorRepository();
        public IEnumerable<Administrator> GetAllAdministrators()
        {
            return repository.GetAll();
        }
        public Administrator GetProduct(string email)
        {
            Administrator item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }



        public HttpResponseMessage PostAdministrator(Administrator item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<Administrator>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { email = item.Email });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutAdministratorEmail(string email, Administrator Administrator)
        {
            Administrator.Email = email;
            if (!repository.Update(Administrator))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutAdministratorPhoneNumber(string phoneNumber, Administrator Administrator)
        {
            Administrator.PhoneNumber = phoneNumber;
            if (!repository.Update(Administrator))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
      
        public void DeleteAdministrator(string email)
        {
            Administrator item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(email);
        }
    }
}
