using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class MakeQuestion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IDMakeQuestion { get; set; }
        [Display(Name = "Mã công ty")]
        public int IDCompany { get; set; }
        [Display(Name = "Mã người lao động")]
        public int IDLaborer { get; set; }
        [Display(Name = "Ngày đặt câu hỏi")]
        [Required]
        public DateTime MakeQuestionDate { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        public string Answer { get; set; }
        [Required]
        public bool Status { get; set; }
        [ForeignKey("IDCompany")]
        public virtual Employer Employer { get; set; }
        [ForeignKey("IDLaborer")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
    }
}