namespace WebAPI.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IAchievementRepository Achievements { get; }
        IVolunteerRepository Volunteers { get; }
        int Save();
    }
}
