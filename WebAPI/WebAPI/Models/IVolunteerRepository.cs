using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface IVolunteerRepository
    {
        IEnumerable<Volunteer> GetAll();
        Volunteer Get(string email);
        Volunteer Add(Volunteer item);
        void Remove(string email);
        bool Update(Volunteer item);
    }
}
