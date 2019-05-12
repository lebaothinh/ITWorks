using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Skill
    {
        #region -----------Bảng Skills-----------
        [Key]
        [Display(Name ="Mã kĩ năng")]
        public int IDSkill { get; set; }
        [Display(Name = "Tên kĩ năng")]
        public string skillName { get; set; }
        
        //Thuộc tính Navigation
        public virtual ICollection<Job_Skill> Job_Skills { get; set; }
        #endregion
    }
}