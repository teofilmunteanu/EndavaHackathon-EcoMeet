using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly webapiContext DBContext;

        private IVolunteerRepository volunteers;
        private IAchievementRepository achievements;

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

        public IAchievementRepository Achievements
        {
            get
            {
                if (achievements == null)
                {
                    achievements = new AchievementRepository(DBContext);
                }

                return achievements;
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
