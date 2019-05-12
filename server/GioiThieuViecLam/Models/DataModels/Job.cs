using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Job
    {
        #region ---------Bảng Jobs----------------
        [Key]
        [Display(Name="Mã công việc")]
        public int IDJob { get; set; }
        [Display(Name = "Mã công ty")]
        public int IDCompany { get; set; } //Khóa ngoại
        [Display(Name = "Mã vị trí làm vi")]
        public int IDLocation { get; set; } //Khóa ngoại
        [Display(Name = "Chức vụ")]
        public string position { get; set; }
        [Display(Name = "Tên công việc")]
        public string jobName { get; set; }
        [Display(Name = "Ngày đăng")]
        public DateTime postDate { get; set; }
        [Display(Name = "Ngày hết hạn")]
        public DateTime expirationDate { get; set; }
        [Display(Name = "Lương")]
        public string salary { get; set; }
        [Display(Name = "Top 3 lí do")]
        public string top3Reasons { get; set; }
        [Display(Name = "Nội dung công việc")]
        public string jobContent { get; set; }
        [Display(Name = "Kĩ năng và kinh nghiệm")]
        public string skillsAndExperience { get; set; }
        [Display(Name = "Lí do làm việc")]
        public string reasonWorking { get; set; }
        [Display(Name = "Hot Job")]
        public bool hotJob { get; set; }

        //Thuộc tính Navigation
        public virtual ICollection<Job_Skill> Job_Skills { get; set; }
        [ForeignKey("IDCompany")]
        public virtual Employer Employer { get; set; }
        
        [ForeignKey("IDLocation")]
        public virtual Location Location { get; set; }
        public virtual ICollection<ApplyWork> ApplyWorks { get; set; }
        #endregion
    }
}