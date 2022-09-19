using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface IAdministratorRepository
    {
        IEnumerable<Administrator> GetAll();
        Administrator Get(string email);
        Administrator Add(Administrator item);
        void Remove(string email);
        bool Update(Administrator item);
    }
}
