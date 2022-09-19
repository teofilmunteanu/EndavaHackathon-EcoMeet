using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    internal interface IShopItemRepository
    {
         
        IEnumerable<ShopItem> GetAll();
        ShopItem Get(int id);
        ShopItem Add(ShopItem item);
        void Remove(int id);
        bool Update(ShopItem item);
    }
}

