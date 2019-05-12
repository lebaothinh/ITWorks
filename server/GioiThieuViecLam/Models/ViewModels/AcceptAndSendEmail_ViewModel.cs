using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class AcceptAndSendEmail_ViewModel
    {
        public int IDLaborer { get; set; }
        public int IDJob { get; set; }
        public string contentEmail { get; set; }
    }
}