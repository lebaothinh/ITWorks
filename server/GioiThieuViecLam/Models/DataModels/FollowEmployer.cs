using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class FollowEmployer
    {
        [Key, Column (Order = 1)]
        [Display(Name = "Mã công ty")]
        public int IDCompany { get; set; }
        [Key, Column(Order = 2 )]
        [Display(Name = "Mã người lao động")]
        public int IDLaborer { get; set; }
        [Display(Name = "Ngày theo dõi")]
        public DateTime FollowingDate { get; set; }
        [ForeignKey("IDCompany")]
        public virtual Employer Employer { get; set; }
        [ForeignKey("IDLaborer")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
    }
}