using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Employer
    {
        #region ---------Bảng Employers----------------
        [Key]
        [Display(Name ="Mã công ty")]
        public int IDCompany { get; set; }
        [Display(Name = "Tên công ty")]
        public string companyName { get; set; }
        [Display(Name = "Mô tả tổng quan")]
        public string generalDescription { get; set; }
        [Display(Name = "Logo")]
        public string logo { get; set; }
        [Display(Name = "Ảnh công ty")]
        public string avatar { get; set; }
        [Display(Name = "Ngày bắt đầu làm việc trong tuần")]
        public string startTime { get; set; }
        [Display(Name = "Ngày kết thúc làm việc trong tuần")]
        public string endTime { get; set; }
        [Display(Name = "Mô tả chi tiết")]
        public string overView { get; set; }
        [Display(Name = "Dịch vụ")]
        public string services { get; set; }
        [Display(Name = "Số lượng nhân viên")]
        public string numberOE { get; set; }
        [Display(Name = "Quốc gia")]
        public string country { get; set; }
        [Display(Name = "Tài khoản")]
        [Index(IsUnique = true)]
        [StringLength(35)]
        public string account { get; set; }
        [Display(Name = "Mật khẩu")]
        public string password { get; set; }
        [Index(IsUnique = true)]
        [StringLength(50)]
        public string email { get; set; }
        public string phoneNumber { get; set; }
        //Thuộc tính Navigation
        public virtual ICollection<Job> Jobs { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<Branch> Branches { get; set; }
        public virtual ICollection<RegisterList> RegisterLists { get; set; }
        #endregion
    }
}