using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class VolunteerRepository : IVolunteerRepository
    {
        private List<Volunteer> Volunteers = new List<Volunteer>();
       

        public VolunteerRepository()
        {
            Add(new Volunteer { FirstName = "Marcel", LastName = "Marcelinho", Username = "mark1",Password="marcel",Email="marcel@yahoo.com",City="Rio de Janeiro", Level=3,Point=33 });
            Add(new Volunteer { FirstName = "Marcela", LastName = "Marcelinha", Username = "mark1a", Password = "marcela", Email = "marcela@yahoo.com", City = "Rio de Janeiro", Level = 32, Point = 332 });

        }

        public IEnumerable<Volunteer> GetAll()
        {
            return Volunteers;
        }

        public Volunteer Get(string email)
        {
            return Volunteers.Find(p => p.Email.Equals(email));
        }

        public Volunteer Add(Volunteer item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            
            Volunteers.Add(item);
            return item;
        }

        public void Remove(string email)
        {
            Volunteers.RemoveAll(p => p.Email == email);
        }

        public bool Update(Volunteer item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int check = Volunteers.FindIndex(p => p.Email.Equals(item.Email));
            if (check == -1)
            {
                return false;
            }
            Volunteers.RemoveAt(check);
            Volunteers.Add(item);
            return true;
        }
    }
}