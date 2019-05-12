using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class Notification_ViewModel
    {
        public int IDJob { get; set; }
        public string logo { get; set; }
        public string Message { get; set; }
        public string Time { get; set; }
    }
}