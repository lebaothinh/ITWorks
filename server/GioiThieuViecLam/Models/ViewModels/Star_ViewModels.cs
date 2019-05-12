using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class Star_ViewModels
    {
        public float recommendationTrue { get; set; }
        public float recommendationFalse { get; set; }
        public int star1 { get; set; }
        public int star2 { get; set; }
        public int star3{ get; set; }
        public int star4{ get; set; }
        public int star5{ get; set; }
        public int totalStar { get; set; }
        public float avgStar { get; set; }
    }
}