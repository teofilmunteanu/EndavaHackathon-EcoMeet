using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class OrganizerRepository : IOrganizerRepository
    {
        private List<Organizer> Organizers = new List<Organizer>();


        public OrganizerRepository()
        {
            Add(new Organizer { OrganizationName = "MarcelProd", Password = "marcel", Email = "marcelprod@yahoo.com", City = "Rio de Janeiro", Administrator = new Administrator {FirstName="Marcelus" } });
          //  Add(new Organizer { FirstName = "Marcela", LastName = "Marcelinha", Username = "mark1a", Password = "marcela", Email = "marcela@yahoo.com", City = "Rio de Janeiro", Level = 32, Point = 332 });

        }

        public IEnumerable<Organizer> GetAll()
        {
            return Organizers;
        }

        public Organizer Get(string email)
        {
            return Organizers.Find(p => p.Email.Equals(email));
        }

        public Organizer Add(Organizer item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            Organizers.Add(item);
            return item;
        }

        public void Remove(string email)
        {
            Organizers.RemoveAll(p => p.Email == email);
        }

        public bool Update(Organizer item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int check = Organizers.FindIndex(p => p.Email.Equals(item.Email));
            if (check == -1)
            {
                return false;
            }
            Organizers.RemoveAt(check);
            Organizers.Add(item);
            return true;
        }
    }
}