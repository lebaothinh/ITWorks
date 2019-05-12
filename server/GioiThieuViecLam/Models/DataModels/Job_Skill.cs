using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Job_Skill
    {
        #region -----------Bảng Job Skill-----------
        [Key]
        [Column(Order = 0)]
        [Display(Name = "Mã công việc")]
        public int IDJob { get; set; }
        [Key]
        [Column(Order = 1)]
        [Display(Name = "Mã kĩ năng")]
        public int IDSkill { get; set; }
        //Khóa ngoại
        [ForeignKey("IDJob")]
        public virtual Job Job { get; set; }
        [ForeignKey("IDSkill")]
        public virtual Skill Skill { get; set; }
        #endregion
    }
}