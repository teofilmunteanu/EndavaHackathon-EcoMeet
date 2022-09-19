using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class CollaboratorsController : ApiController
    {
        static readonly ICollaboratorRepository repository = new CollaboratorRepository();
        public IEnumerable<Collaborator> GetAllCollaborators()
        {
            return repository.GetAll();
        }
        public Collaborator GetProduct(string email)
        {
            Collaborator item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }
        public void PutCollaboratorPassword(string password, Collaborator collaborator)
        {
            collaborator.Password = password;
            if (!repository.Update(collaborator))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutCollaboratorShopItem(ShopItem shopItem, Collaborator collaborator)
        {
            collaborator.ShopItems.Add(shopItem);
            if (!repository.Update(collaborator))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public HttpResponseMessage PostCollaborator(Collaborator item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<Collaborator>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { email = item.Email });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutCollaboratorEmail(string email, Collaborator Collaborator)
        {
            Collaborator.Email = email;
            if (!repository.Update(Collaborator))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
     

        public void DeleteCollaborator(string email)
        {
            Collaborator item = repository.Get(email);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(email);
        }
    }
}
