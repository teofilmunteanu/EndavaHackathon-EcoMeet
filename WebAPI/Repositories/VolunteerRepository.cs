using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class VolunteerRepository : GenericRepository<Volunteer>, IVolunteerRepository
    {
        public VolunteerRepository(webapiContext DBContext) : base(DBContext)
        {
            
        }

        public void CreateVolunteer(Volunteer volunteer)
        {
            var entity = new Volunteer()
            {
                Email = volunteer.Email,
                Password = volunteer.Password,
                Username = volunteer.Username,
                FirstName = volunteer.FirstName,
                LastName = volunteer.LastName,
                City = volunteer.City
            };
        }
    }
}
