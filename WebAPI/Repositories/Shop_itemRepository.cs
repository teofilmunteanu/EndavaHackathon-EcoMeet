using WebAPI.Models;
using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class Shop_itemRepository : GenericRepository<Shop_item>, IShop_itemRepository
    {
        public Shop_itemRepository(webapiContext context) : base(context)
        {
        }
    }
}
