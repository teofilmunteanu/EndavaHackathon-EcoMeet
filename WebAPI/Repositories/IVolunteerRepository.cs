using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IVolunteerRepository : IGenericRepository<Volunteer>
    {
        void CreateVolunteer(Volunteer volunteer);
    }
}
