using GioiThieuViecLam.Models.DataModels;
using GioiThieuViecLam.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class JobController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        LocationController locationctrl = new LocationController();

        [HttpGet]
        public List<Job_ViewModels> GetAllJobsByCompany()
        {
            try{
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    List<Job_ViewModels> list = new List<Job_ViewModels>();
                    var c = from a in db.Jobs
                            join b in db.Locations
                            on a.IDLocation equals b.IDLocation
                            where a.IDCompany == id
                            select new { a.IDJob, a.IDCompany,a.IDLocation, b.locationName, a.position, a.jobName, a.postDate, a.expirationDate, a.salary, a.top3Reasons, a.jobContent, a.skillsAndExperience, a.reasonWorking, a.hotJob };
                    foreach (var job in c)
                    {
                        Job_ViewModels a = new Job_ViewModels(job.IDJob, job.IDLocation, job.IDCompany, job.locationName, job.position, job.jobName, job.postDate, job.expirationDate, job.salary, job.top3Reasons, job.jobContent, job.skillsAndExperience, job.reasonWorking, job.hotJob);
                        list.Add(a);
                    }
                    return list;
                }
                return null;
            }
            catch (Exception e){
                throw e;
            }
        }

        [HttpGet]
        public List<Job> GetAllJobs()
        {
            return db.Jobs.ToList<Job>();
        }
        [HttpGet]
        public Job_ViewModels GetAJob(int ?id)
        {
            Job jobf = db.Jobs.Where(j => j.IDJob == id).SingleOrDefault();
            if (jobf == null) return null;
            Job_ViewModels job = new Job_ViewModels(jobf.IDJob, jobf.IDLocation, jobf.IDCompany, locationctrl.GetLocation(jobf.IDLocation).locationName, jobf.position, jobf.jobName, jobf.postDate, jobf.expirationDate, jobf.salary, jobf.top3Reasons, jobf.jobContent, jobf.skillsAndExperience, jobf.reasonWorking, jobf.hotJob);
            return job;

        }
        public IQueryable GetAShortcutJob(int? id)
        {
            return (from a in db.Jobs
                   join b in db.Employers on a.IDCompany equals b.IDCompany
                   join c in db.Locations on a.IDLocation equals c.IDLocation
                   where a.IDCompany == id
                   select new { a.IDCompany, a.IDJob, a.jobName, a.salary, a.jobContent, c.locationName, a.postDate, b.logo }).Take(5);
        }
        [HttpPost]
        public List<Job_ViewModels> InsertAJob(Job job)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    job.IDCompany = id;
                    db.Jobs.Add(job);
                    db.SaveChanges();
                    return GetAllJobsByCompany();
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                throw e;
            }
        }

        [HttpDelete]
        public string DeleteAJob(int id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idt = profilectrl.GetID(token);
                if (idt != 0)
                {
                    var vps = db.Jobs.Where(a => a.IDJob == id).ToList();
                    foreach (var vp in vps)
                    {
                        if (vp.IDCompany == idt)
                        {
                            db.Jobs.Remove(vp);
                            db.SaveChanges();
                            return "Thanh cong!";
                        }
                        else return "Wrong Token!";
                    }
                }
                return "Wrong Token!";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }

        [HttpPut]
        public List<Job_ViewModels> UpdateAJob(Job mode)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    Job emps = db.Jobs.Where(c => c.IDJob == mode.IDJob).FirstOrDefault<Job>();
                    emps.Location = mode.Location;
                    emps.position = mode.position;
                    emps.jobName = mode.jobName;
                    emps.postDate = mode.postDate;
                    emps.expirationDate = mode.expirationDate;
                    emps.salary = mode.salary;
                    emps.top3Reasons = emps.top3Reasons;
                    emps.jobContent = mode.jobContent;
                    emps.skillsAndExperience = mode.skillsAndExperience;
                    emps.reasonWorking = mode.reasonWorking;
                    emps.top3Reasons = mode.top3Reasons;
                    db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return GetAllJobsByCompany();
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
        [HttpGet]
        public IQueryable SearchJobs(string id)
        {
            for (int i = 1; i < VietnameseSigns.Length; i++)
            {
                for (int j = 0; j < VietnameseSigns[i].Length; j++)
                    id = id.Replace(VietnameseSigns[i][j], VietnameseSigns[0][i - 1]);
            }
            return (from a in db.Jobs
                    join b in db.Employers on a.IDCompany equals b.IDCompany
                    join c in db.Locations on a.IDLocation equals c.IDLocation
                    join d in db.Job_Skills on a.IDJob equals d.IDJob
                    join e in db.Skills on d.IDSkill equals e.IDSkill
                    where a.jobName.ToLower().Contains(id.ToLower()) || b.companyName.ToLower().Contains(id.ToLower()) || e.skillName.ToLower().Contains(id.ToLower())
                    select new { a.IDCompany, a.IDJob, a.jobName, a.salary, a.jobContent, c.locationName, a.postDate, b.logo });
        }
        [HttpGet]
        public IQueryable GetAllShortcutJobs()
        {
            return (from a in db.Jobs
                    join b in db.Employers on a.IDCompany equals b.IDCompany
                    join c in db.Locations on a.IDLocation equals c.IDLocation
                    join d in db.Job_Skills on a.IDJob equals d.IDJob
                    join e in db.Skills on d.IDSkill equals e.IDSkill
                    select new { a.IDCompany, a.IDJob, a.jobName, a.salary, a.jobContent, c.locationName, a.postDate, b.logo });
        }
        //Remove dấu tiếng việt
        private static readonly string[] VietnameseSigns = new string[]
        {

            "aAeEoOuUiIdDyY",

            "áàạảãâấầậẩẫăắằặẳẵ",

            "ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ",

            "éèẹẻẽêếềệểễ",

            "ÉÈẸẺẼÊẾỀỆỂỄ",

            "óòọỏõôốồộổỗơớờợởỡ",

            "ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ",

            "úùụủũưứừựửữ",

            "ÚÙỤỦŨƯỨỪỰỬỮ",

            "íìịỉĩ",

            "ÍÌỊỈĨ",

            "đ",

            "Đ",

            "ýỳỵỷỹ",

            "ÝỲỴỶỸ"
        };
    }
}
