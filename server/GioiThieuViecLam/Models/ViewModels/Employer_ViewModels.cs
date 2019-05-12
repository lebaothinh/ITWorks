using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class Employer_ViewModels
    {
        public int IDCompany { get; set; }
        public string companyName { get; set; }
        public string generalDescription { get; set; }
        public string logo { get; set; }
        public string avatar { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
        public string overView { get; set; }
        public string services { get; set; }
        public string numberOE { get; set; }
        public string country { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
    }
}