using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class AdministratorRepository : IAdministratorRepository
    {
        private List<Administrator> Administrators = new List<Administrator>();


        public AdministratorRepository()
        {
            Add(new Administrator { FirstName = "Marcels", LastName = "Marcelinhos", Email = "marcels@yahoo.com", PhoneNumber = "0123456789", Organizer = new Organizer {OrganizationName="MarcelProd" } });
            Add(new Administrator { FirstName = "Marcelas", LastName = "Marcelinhas",  Email = "marcelas@yahoo.com", PhoneNumber="0198765432" });

        }

        public IEnumerable<Administrator> GetAll()
        {
            return Administrators;
        }

        public Administrator Get(string email)
        {
            return Administrators.Find(p => p.Email.Equals(email));
        }

        public Administrator Add(Administrator item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            Administrators.Add(item);
            return item;
        }

        public void Remove(string email)
        {
            Administrators.RemoveAll(p => p.Email == email);
        }

        public bool Update(Administrator item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int check = Administrators.FindIndex(p => p.Email.Equals(item.Email));
            if (check == -1)
            {
                return false;
            }
            Administrators.RemoveAt(check);
            Administrators.Add(item);
            return true;
        }
    }
}
