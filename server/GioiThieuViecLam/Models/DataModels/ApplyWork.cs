using GioiThieuViecLam.Models.BusinessModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class ApplyWork
    {
        [Key]
        [Column(Order = 0)]
        public int IDLaborer { get; set; }
        [Key]
        [Column(Order = 1)]
        public int IDJob { get; set; }
        public string description { get; set; }
        public Const.AWStatus status { get; set; }
        //Thuộc tính khóa ngoại
        [ForeignKey("IDLaborer")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
        [ForeignKey("IDJob")]
        public virtual Job Job { get; set; }
    }
}