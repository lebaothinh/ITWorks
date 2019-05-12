using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class News
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NewsId { get; set; }
        [Required]
        public int AuthorId { get; set; }
        [Required]
        public bool TypeOfAuthor { get; set; } // True is Employer and vice versal.
        [Required]
        public string Title { get; set; }
        [Required]
        public string GeneralDescription { get; set; }
        public string Avartar { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime WritingDate { get; set; }
        public int Views { get; set; }
        public int NumberOfLikes { get; set; }
        [Required]
        public int TypeOfNewsId { get; set; }
        [ForeignKey("TypeOfNewsId")]
        public virtual TypeOfNews TypeOfNews { get; set; }
    }
}