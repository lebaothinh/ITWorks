using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class LaborerAndAdmin_ViewModels
    {
        public string laborerName { get; set; }
        public DateTime dateOfBirth { get; set; }
        public bool sex { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string description { get; set; }
        public string cV { get; set; }
        public string avatar { get; set; }
        public List<DataModels.Skill> skills { get; set; }
        public LaborerAndAdmin_ViewModels(string laborerName,
        DateTime dateOfBirth,
        bool sex,
        string email,
        string phoneNumber,
        string description,
        string cV,
        string avatar,
        List<DataModels.Skill> skills)
        {
            this.laborerName = laborerName;
            this.dateOfBirth = dateOfBirth;
            this.sex = sex;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.description = description;
            this.cV = cV;
            this.avatar = avatar;
            this.skills = skills;
        }
    }
}