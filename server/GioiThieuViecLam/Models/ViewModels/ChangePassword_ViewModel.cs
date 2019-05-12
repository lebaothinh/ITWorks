using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class ChangePassword_ViewModel
    {
        [Key]
        public string oldPassword { get; set; }
        [Key]
        public string newPassword { get; set; }
        [Key]
        public int ID { get; set; }
    }
}