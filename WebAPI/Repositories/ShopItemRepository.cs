using WebAPI.Models;
using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class ShopItemRepository : GenericRepository<Shopitem>, IShopitemRepository
    {
        public ShopItemRepository(webapiContext context) : base(context)
        {
        }
    }
}
