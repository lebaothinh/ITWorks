using Common;
using GioiThieuViecLam.Models.BusinessModels;
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
    public class ApplyWorkController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();

        [HttpGet]
        public List<ApplyWork> getApplyWorkByJob(int ?idJob)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    return db.ApplyWorks.Where(a => a.IDJob == idJob).ToList();
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
        public IQueryable getApplyWorkByLaborer()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    return from a in db.ApplyWorks
                             join b in db.Jobs on a.IDJob equals b.IDJob
                             join c in db.Employers on b.IDCompany equals c.IDCompany
                             where a.IDLaborer == idLaborer
                             select new { a.IDJob, b.jobName, c.logo, a.status };
                              
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
        public IQueryable getApplyWorkByCompany()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idCompany = profilectrl.GetID(token);
                if (idCompany != 0)
                {
                    return from a in db.LaborerandAdmins
                           join b in db.ApplyWorks
                           on a.IDLaborer equals b.IDLaborer
                           join c in db.Jobs on b.IDJob equals c.IDJob
                           where c.IDCompany == idCompany && b.status != Const.AWStatus.Remove
                           select new { avatar = a.avatar, IDLaborer = a.IDLaborer, laborerName = a.laborerName, status = b.status ,IDJob = c.IDJob, jobName = c.jobName };
                }
                return null;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }



        [HttpPost]
        public string InsertApply(ApplyWork ex)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    if (db.ApplyWorks.Where(a => a.IDLaborer == id && a.IDJob == ex.IDJob).ToList().Count != 0) return "Trung don!";
                    ex.IDLaborer = id;
                    ex.status = Const.AWStatus.Sent;
                    db.ApplyWorks.Add(ex);
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                else return "";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return e.ToString();
            }
        }
        [HttpDelete]
        public string DeleteAnApply (int ?id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    var vps = db.ApplyWorks.Where(a => a.IDJob == id && a.IDLaborer == idLaborer).ToList();
                    foreach (var vp in vps)
                        db.ApplyWorks.Remove(vp);
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                return "";

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return e.ToString();
            }
        }

        [HttpGet]
        public IQueryable GetContactList()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    return from a in db.LaborerandAdmins
                           join b in db.ApplyWorks
                           on a.IDLaborer equals b.IDLaborer
                           join c in db.Jobs on b.IDJob equals c.IDJob
                           where c.IDCompany == idEmployer && b.status == Const.AWStatus.AcceptContactLater
                           select new { avatar = a.avatar, IDLaborer = a.IDLaborer, laborerName = a.laborerName, IDJob = c.IDJob, jobName = c.jobName };
                }
                return null;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        [HttpPut]
        public bool SetStatusByCompany(BasicApplyWork_ViewModel basicApplyWork)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    var existJob = db.Jobs.Where(j => j.IDJob == basicApplyWork.IDJob && j.IDCompany == idEmployer).FirstOrDefault();
                    if (existJob != null)
                    {
                        var apply = db.ApplyWorks.Where(a => a.IDLaborer == basicApplyWork.IDLaborer && a.IDJob == basicApplyWork.IDJob).FirstOrDefault();
                        if (apply != null)
                        {
                            apply.status = basicApplyWork.status;
                            db.SaveChanges();
                            return true;
                        }
                    }

                }
                return false;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        [HttpPut]
        public bool AcceptAndSendEmail(AcceptAndSendEmail_ViewModel mode)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    var result = (from a in db.ApplyWorks
                                  join b in db.Jobs
                                  on a.IDJob equals b.IDJob
                                  join c in db.Employers
                                  on b.IDCompany equals c.IDCompany
                                  where a.IDJob == mode.IDJob && a.IDLaborer == mode.IDLaborer
                                  select new { companyName = c.companyName, jobName = b.jobName }).FirstOrDefault();
                    if (result != null)
                    {
                        var apply = db.ApplyWorks.Where(a => a.IDLaborer == mode.IDLaborer && a.IDJob == mode.IDJob).FirstOrDefault();
                        var laborer = db.LaborerandAdmins.Where(a => a.IDLaborer == mode.IDLaborer).FirstOrDefault();
                        if (apply != null && laborer != null)
                        {
                            //Send email here
                            new MailHelper().SendMail(laborer.email, "Feedback from the "+result.companyName+" Employer about the "+result.jobName+" job which you are applying",mode.contentEmail);
                            //Set status here
                            apply.status = Const.AWStatus.AcceptSentEmail;
                            db.SaveChanges();
                            return true;
                        }
                    }

                }
                return false;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        [HttpPut]
        public bool AcceptAndContactLater(AcceptAndSendEmail_ViewModel mode)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    var existJob = db.Jobs.Where(j => j.IDJob == mode.IDJob && j.IDCompany == idEmployer).FirstOrDefault();
                    if (existJob != null)
                    {
                        var apply = db.ApplyWorks.Where(a => a.IDLaborer == mode.IDLaborer && a.IDJob == mode.IDJob).FirstOrDefault();
                        if (apply != null)
                        {
                            //Insert contact to database here
                            //Set status here
                            apply.status = Const.AWStatus.AcceptContactLater;
                            db.SaveChanges();
                            return true;
                        }
                    }

                }
                return false;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
    }
}
