using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class RegisterList
    {
        [Key]
        [Column(Order = 0)]
        public int IDEmployer { get; set; }
        [Key]
        [Column(Order = 1)]
        public int IDRegisterPackage { get; set; }
        public DateTime registerDate { get; set; }
        public DateTime registerEx { get; set; }
        [ForeignKey("IDEmployer")]
        public virtual Employer Employer { get; set; }
        [ForeignKey("IDRegisterPackage")]
        public virtual RegisterPackage RegisterPackage { get; set; }
    }
}