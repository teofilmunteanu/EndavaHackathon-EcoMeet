using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class CollaboratorRepository : ICollaboratorRepository
    {
        private List<Collaborator> Collaborators = new List<Collaborator>();


        public CollaboratorRepository()
        {
            Add(new Collaborator { Name = "Marcels",Password="123", Email = "marcelsc@yahoo.com",Administrator=new Administrator { FirstName ="Marcels"}});
            //Add(new Collaborator { Name = "Marcelas",Password="123", Email = "marcelasc@yahoo.com",Administrator=new Administrator { FirstName ="Marcelas"} });

        }

        public IEnumerable<Collaborator> GetAll()
        {
            return Collaborators;
        }

        public Collaborator Get(string email)
        {
            return Collaborators.Find(p => p.Email.Equals(email));
        }

        public Collaborator Add(Collaborator item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            Collaborators.Add(item);
            return item;
        }

        public void Remove(string email)
        {
            Collaborators.RemoveAll(p => p.Email == email);
        }

        public bool Update(Collaborator item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int check = Collaborators.FindIndex(p => p.Email.Equals(item.Email));
            if (check == -1)
            {
                return false;
            }
            Collaborators.RemoveAt(check);
            Collaborators.Add(item);
            return true;
        }
    }
}