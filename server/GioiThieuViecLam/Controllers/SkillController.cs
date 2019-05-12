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
    public class SkillController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();

        [HttpGet]
        public IQueryable GetSkillsByIDJob(int? id)
        {
            if (id != null)
            {
                return (from a in db.Jobs
                        join b in db.Job_Skills on a.IDJob equals b.IDJob
                        join c in db.Skills on b.IDSkill equals c.IDSkill
                        where a.IDJob == id
                        select new  {  c.IDSkill, c.skillName });
            }
            else
            {
                return null;
            }
        }

        [HttpGet]
        public List<Skill> GetSkills(int IDLaborer)
        {
            try
            {
                if (IDLaborer != 0)
                {
                    var arrSkills = db.Laborer_Skills.Where(l => l.IDLaborer == IDLaborer).Select(c => c.IDSkill).ToList();
                    return db.Skills.Where(s => arrSkills.Contains(s.IDSkill)).ToList();
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
   
        [HttpGet]
        public List<Skill> AddSkill(int id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    var laborerSkill = new Laborer_Skill { IDLaborer = idLaborer, IDSkill = id };
                    db.Laborer_Skills.Add(laborerSkill);
                    db.SaveChanges();
                    return GetSkills(idLaborer);
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        [HttpDelete]
        public List<Skill> RemoveSkill(int id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    var deleteSkill = db.Laborer_Skills.Where(c => c.IDLaborer == idLaborer && c.IDSkill == id).FirstOrDefault();
                    if (deleteSkill != null)
                    {
                        db.Laborer_Skills.Remove(deleteSkill);
                        db.SaveChanges();
                        return GetSkills(idLaborer);
                    }
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        [HttpGet]
        public IQueryable SearchSkills(int? id)
        {
            if (id != null)
            {
                return (from a in db.Jobs
                        join b in db.Job_Skills on a.IDJob equals b.IDJob
                        join c in db.Skills on b.IDSkill equals c.IDSkill
                        where c.IDSkill == id
                        select new { a.IDJob, a.IDCompany, a.IDLocation, a.position, a.jobName, a.postDate, a.expirationDate, a.salary, a.top3Reasons, a.jobContent, a.skillsAndExperience, a.reasonWorking });
            }
            else
            {
                return null;
            }
        }

        [HttpPost]
        public List<Skill> FindoutSkills(Search_ViewModel key)
        {
            return db.Skills.Where(s => s.skillName.ToLower().Contains(key.key.ToLower())).ToList();
        }
    }
}
