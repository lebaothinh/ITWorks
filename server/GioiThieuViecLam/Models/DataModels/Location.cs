using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class Location
    {
        #region -----------Bảng Location-----------
        [Key]
        [Display(Name ="Mã vị trí")]
        public int IDLocation { get; set; }
        [Display(Name = "Tên vị trí")]
        public string locationName { get; set; }
        [Display(Name = "Bản đồ")]
        public string map { get; set; }
       
        //Thuộc tính Navigation
       
        public virtual ICollection<Branch> Branches { get; set; }
        public virtual ICollection<Job> Jobs { get; set; }
       
        #endregion
    }
}