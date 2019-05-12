using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.ViewModels
{
    public class Job_ViewModels
    {
        public Job_ViewModels(){}
        public Job_ViewModels(int IDJob ,
        int IDLocation,
        int IDCompany,
        string location,
        string position,
        string jobName,
        DateTime postDate,
        DateTime expirationDate,
        string salary,
        string top3Reasons,
        string jobContent,
        string skillsAndExperience,
        string reasonWorking, 
        bool hotJob)
        {
            this.IDJob = IDJob;
            this.IDLocation = IDLocation;
            this.IDCompany = IDCompany;
            this.location = location;
            this.position = position;
            this.jobName = jobName;
            this.postDate = postDate;
            this.expirationDate = expirationDate;
            this.salary = salary;
            this.top3Reasons = top3Reasons;
            this.jobContent = jobContent;
            this.skillsAndExperience = skillsAndExperience;
            this.reasonWorking = reasonWorking;
            this.hotJob = hotJob;
        }
        public int IDJob;
        public int IDLocation;
        public int IDCompany;
        public string location;
        public string position;
        public string jobName;
        public DateTime postDate;
        public DateTime expirationDate;
        public string salary;
        public string top3Reasons;
        public string jobContent;
        public string skillsAndExperience;
        public string reasonWorking;
        public bool hotJob;
    }
}