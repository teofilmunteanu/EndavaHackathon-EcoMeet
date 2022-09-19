using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface ICollaboratorRepository
    {
        IEnumerable<Collaborator> GetAll();
        Collaborator Get(string email);
        Collaborator Add(Collaborator item);
        void Remove(string email);
        bool Update(Collaborator item);
    }
}
