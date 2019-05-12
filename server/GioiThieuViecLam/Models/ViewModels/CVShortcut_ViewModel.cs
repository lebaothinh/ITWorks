using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class CVShortcut_ViewModel
    {
        public int IDLaborer { get; set; }
        public string Avatar { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Skill> arrSkills { get; set; }
    }
}