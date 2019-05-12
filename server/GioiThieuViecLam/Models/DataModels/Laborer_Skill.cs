using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Laborer_Skill
    {
        [Key]
        [Column(Order = 0)]
        [Display(Name = "Mã người lao động")]
        public int IDLaborer { get; set; }
        [Key]
        [Column(Order = 1)]
        [Display(Name = "Mã kĩ năng")]
        public int IDSkill { get; set; }
        //Khóa ngoại
        [ForeignKey("IDLaborer")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
        [ForeignKey("IDSkill")]
        public virtual Skill Skill { get; set; }
    }
}