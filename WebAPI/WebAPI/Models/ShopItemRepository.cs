using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ShopItemRepository : IShopItemRepository
    {
        private List<ShopItem> ShopItems = new List<ShopItem>();
        private int _nextId = 1;

        public ShopItemRepository()
        {
            Add(new ShopItem { Id = 1, Name = "Castraveti", Price = 12,Description="Multi Castraveti",Collaborator=new Collaborator {Name="Marcelus" } });
            //Add(new ShopItem { Name = "Yo-yo", Category = "Toys", Price = 3.75M });
           // Add(new ShopItem { Name = "Hammer", Category = "Hardware", Price = 16.99M });
        }

        public IEnumerable<ShopItem> GetAll()
        {
            return ShopItems;
        }

        public ShopItem Get(int id)
        {
            return ShopItems.Find(p => p.Id == id);
        }

        public ShopItem Add(ShopItem item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            ShopItems.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            ShopItems.RemoveAll(p => p.Id == id);
        }

        public bool Update(ShopItem item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int index = ShopItems.FindIndex(p => p.Id == item.Id);
            if (index == -1)
            {
                return false;
            }
            ShopItems.RemoveAt(index);
            ShopItems.Add(item);
            return true;
        }
    }
}