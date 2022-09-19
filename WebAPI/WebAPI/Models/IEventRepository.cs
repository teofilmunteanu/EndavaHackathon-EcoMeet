using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface IEventRepository
    {
        IEnumerable<Event> GetAll();
        Event Get(int id);
        Event Add(Event item);
        void Remove(int id);
        bool Update(Event item);
    }
}
