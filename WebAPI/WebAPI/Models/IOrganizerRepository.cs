using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface IOrganizerRepository
    {
        IEnumerable<Organizer> GetAll();
        Organizer Get(string email);
        Organizer Add(Organizer item);
        void Remove(string email);
        bool Update(Organizer item);
    }
}
