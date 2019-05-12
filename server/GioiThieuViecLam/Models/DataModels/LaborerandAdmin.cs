using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class LaborerandAdmin
    {
        #region -----------Bảng Laborer-----------
        [Key]
        [Display(Name = "Mã người lao động")]
        public int IDLaborer { get; set; }
        [Display(Name = "Tên người lao động")]
        public string laborerName { get; set; }
        [Display(Name = "Ngày sinh")]
        public DateTime dateOfBirth { get; set; }
        [Display(Name = "Giới tính")]
        public bool sex { get; set; }
        [Display(Name = "Email")]
        [Index(IsUnique = true)]
        [StringLength(50)]
        public string email { get; set; }
        [Display(Name = "Số điện thoại")]
        public string phoneNumber { get; set; }
        [Display(Name = "Mô tả")]
        public string description { get; set; }
        [Display(Name = "CV")]
        public string cV { get; set; }
        [Display(Name = "Ảnh đại diện")]
        public string avatar { get; set; }
        [Display(Name = "Quyền")]
        public bool auth { get; set; }
        [Display(Name = "Tài khoản")]
        [Index(IsUnique = true)]
        [StringLength(35)]
        public string account { get; set; }
        [Display(Name = "Mật khẩu")]
        public string password { get; set; }
        [Display(Name = "Coin")]
        public long coin { get; set; }
        //Thuộc tính Navigation
        public virtual ICollection<Review> Reviews { get; set; }
        #endregion
    }
}