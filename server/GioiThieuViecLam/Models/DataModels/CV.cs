using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class CV
    {
        [Key]
        public int LaborerId { get; set; }
        public string ShortDescription { get; set; }
        public string Address { get; set; }
        public float GPA { get; set; }
        public string Major { get; set; }
        public string Character { get; set; }
        public string ApplyPosition { get; set; }
        public string Hobbies { get; set; }
        public string Objective { get; set; }
        public string WorkExperience { get; set; }
        public string SoftSkills { get; set; }
        public string Skills { get; set; }
        public string Languages { get; set; }
        public string Awards { get; set; }
        public string Education { get; set; }
        public string DetailInformation { get; set; }
        [ForeignKey("LaborerId")]
        public virtual LaborerandAdmin LaborerandAdmin { get; set; }
    }
}