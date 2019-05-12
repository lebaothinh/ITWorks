using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class ForgetPassword
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ForgetPasswordId { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public bool Type { get; set; }
        [Required]
        public string Param { get; set; }
        [Required]
        public DateTime ExpirationTime { get; set; }
        [Required]
        public bool Status { get; set; }
    }
}