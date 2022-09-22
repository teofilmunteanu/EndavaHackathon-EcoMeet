using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly webapiContext DBContext;

        private IVolunteerRepository volunteers;

        public UnitOfWork(webapiContext context)
        {
            DBContext = context;
        }

        
        public IVolunteerRepository Volunteers
        {
            get
            {
                if (volunteers == null)
                {
                    volunteers = new VolunteerRepository(DBContext);
                }
                    
                return volunteers;
            }
        }

        public int Save()
        {
           return DBContext.SaveChanges();
        }

        public void Dispose()
        {
            DBContext.Dispose();
        }
    }
}
