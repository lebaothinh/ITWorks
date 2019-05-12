using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Branch
    {
        [Key]
        [Column(Order =0)]
        public int IDCompany { get; set; }
        [Key]
        [Column(Order = 1)]
        public int IDLocation { get; set; }
        //Thuộc tính khóa ngoại
        [ForeignKey("IDCompany")]
        public virtual Employer Employer { get; set; }
        [ForeignKey("IDLocation")]
        public virtual Location Location { get; set; }
    }
}