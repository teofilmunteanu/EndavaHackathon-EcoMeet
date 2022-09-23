namespace WebAPI.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IAchievementRepository Achievements { get; }
        IVolunteerRepository Volunteers { get; }
        IAdministratorRepository Administrators { get; }
        int Save();
    }
}
