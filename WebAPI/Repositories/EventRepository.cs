using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class EventRepository : GenericRepository<Event>, IEventRepository
    {
        public EventRepository(webapiContext context) : base(context)
        {
        }
    }
}
