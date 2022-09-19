using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    public class ShopItemsController : ApiController
    {
        static readonly IShopItemRepository repository = new ShopItemRepository();
        public IEnumerable<ShopItem> GetAllShopItems()
        {
            return repository.GetAll();
        }
        public ShopItem GetProduct(int id)
        {
            ShopItem item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }
        public void PutShopItemPrice(int price, ShopItem ShopItem)
        {
            ShopItem.Price = price;
            if (!repository.Update(ShopItem))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        public void PutShopItemDescription(string description, ShopItem ShopItem)
        {
            ShopItem.Description = description;
            if (!repository.Update(ShopItem))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public void PutShopItemName(string name, ShopItem ShopItem)
        {
            ShopItem.Name = name;
            if (!repository.Update(ShopItem))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public HttpResponseMessage PostShopItem(ShopItem item)
        {
            item = repository.Add(item);
            var response = Request.CreateResponse<ShopItem>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { id = item.Id });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        public void PutShopItemEmail(int id, ShopItem ShopItem)
        {
            ShopItem.Id = id;
            if (!repository.Update(ShopItem))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }


        public void DeleteShopItem(int id)
        {
            ShopItem item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(id);
        }
    }
}
