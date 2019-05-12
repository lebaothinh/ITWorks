using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Review
    {
        #region -----------Bảng Reviews-----------
        [Key]
        [Column(Order = 0)]
        [Display(Name ="Mã người lao động")]
        public int IDLaborer { get; set; }
        [Column(Order = 1)]
        [Key]
        [Display(Name = "Mã công ty")]
        public int IDCompany { get; set; }
        [Display(Name = "Sao đánh giá")]
        public int star { get; set; }
        [Display(Name = "Tựa đề")]
        public string title { get; set; }
        [Display(Name = "Khuyến nghị")]
        public bool recommendation { get; set; }
        [Display(Name = "Ngày review")]
        public DateTime reviewDate { get; set; }
        [Display(Name = "Bạn thích")]
        public string like { get; set; }
        [Display(Name = "Bạn không thích")]
        public string dislike { get; set; }
        //Khóa ngoại
        [ForeignKey("IDCompany")]
        public virtual Employer Employer { get; set; }
        [ForeignKey("IDLaborer")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
        //Thuộc tính Navigation

        #endregion
    }
}