using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class RegisterPackage_ViewModel
    {
        public int IDRegisterPackage { get; set; }
        public string registerPackageName { get; set; }
        public long fee { get; set; }
        public int discount { get; set; }
        public bool registerStatus { get; set; }
        public DateTime exDate { get; set; }
    }
}