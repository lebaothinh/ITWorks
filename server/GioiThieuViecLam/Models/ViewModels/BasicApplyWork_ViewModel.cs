using GioiThieuViecLam.Models.BusinessModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class BasicApplyWork_ViewModel
    {
        public int IDLaborer { get; set; }
        public int IDJob { get; set; }
        public Const.AWStatus status { get; set; }
    }
}