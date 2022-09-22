namespace WebAPI.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IVolunteerRepository Volunteers { get; }
        int Save();
    }
}
