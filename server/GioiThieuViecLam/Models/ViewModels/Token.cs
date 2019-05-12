using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class Token
    {
        public Token (int idEmployer, string token,string idType)
        {
            this.ID = idEmployer;
            this.token = token;
            //true la employer || false la laborer and admin
            this.IDtype = idType;
        }
        public int ID { get; set; }
        public string token {get; set;}
        public string IDtype { get; set; }
    }
}