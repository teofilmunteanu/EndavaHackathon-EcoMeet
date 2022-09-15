using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Collaborator
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public Administrator Administrator { get; set; }
        public List<ShopItem> ShopItems { get; set; }
    }
}