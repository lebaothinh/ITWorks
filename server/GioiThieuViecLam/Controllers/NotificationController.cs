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
    public class NotificationController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();

        [HttpGet]
        public List<Notification_ViewModel>  GetNotifications()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    var arrFavoriteSkills = db.Laborer_Skills.Where(s => s.IDLaborer == id).Select(c => c.IDSkill).ToList();
                    var arrFavoriteCompany = db.FollowEmployers.Where(s => s.IDLaborer == id).Select(c => c.IDCompany).ToList();
                    var arrJobSkills = db.Job_Skills.Where(j => arrFavoriteSkills.Contains(j.IDSkill)).Select(c => c.IDJob).ToList();
                    List<Notification_ViewModel> arrNotifications = (from a in db.Jobs
                                                                     join b in db.Employers
                                                                     on a.IDCompany equals b.IDCompany
                                                                     where arrJobSkills.Contains(a.IDJob) && arrFavoriteCompany.Contains(b.IDCompany)
                                                                     select new Notification_ViewModel { IDJob = a.IDJob, Time = a.postDate.ToString() , logo = b.logo, Message = b.companyName+ " need to recruit "+ a.jobName }).ToList();
                    foreach (Notification_ViewModel n in arrNotifications)
                    {
                        TimeSpan timeSpan = DateTime.Now - Convert.ToDateTime(n.Time);
                        n.Time = timeSpan.Days+" days ago.";
                    }
                    return arrNotifications;
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
    }
}
