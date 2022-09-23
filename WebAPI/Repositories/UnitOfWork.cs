using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly webapiContext DBContext;

        private IVolunteerRepository volunteers;
        private IAchievementRepository achievements;
        private IAdministratorRepository administrators;
        private IOrganizerRepository organizers;
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

        public IAdministratorRepository Administrators
        {
            get
            {
                if (administrators == null)
                {
                    administrators = new AdministratorRepository(DBContext);
                }

                return administrators;
            }
        }
        public IOrganizerRepository Organizers
        {
            get
            {
                if (organizers == null)
                {
                    organizers = new OrganizerRepository(DBContext);
                }

                return organizers;
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
