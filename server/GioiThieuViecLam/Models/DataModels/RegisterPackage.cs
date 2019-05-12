using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class RegisterPackage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IDRegisterPackage { get; set; }
        [Required]
        public string registerPackageName { get; set; }
        public long fee { get; set; }
        [Range(0, 100, ErrorMessage = "Giảm giá từ 0 đến 100%")]
        public int discount { get; set; }
    }
}