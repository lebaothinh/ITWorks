using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GioiThieuViecLam.Models.DataModels;
using GioiThieuViecLam.Models.ViewModels;
using GioiThieuViecLam.Models.BusinessModels;
using System.Text.RegularExpressions;
using Common;

namespace GioiThieuViecLam.Controllers
{
    public class EmployerController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        public List<Employer> GetAllEmployersByAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                return db.Employers.ToList();
            }
            return null;
        }
        public List<Employer_ViewModels> GetTop6Employers()
        {
            return (from a in db.Employers select new Employer_ViewModels { IDCompany = a.IDCompany, logo= a.logo, companyName = a.companyName}).Take(6).OrderBy(a => a.IDCompany).ToList();
        }
        public List<Employer_ViewModels> GetAllEmployers()
        {
                return (from a in db.Employers
                        select new Employer_ViewModels
                        { IDCompany = a.IDCompany, companyName = a.companyName, generalDescription = a.generalDescription, logo = a.logo, avatar = a.avatar, startTime = a.startTime, endTime = a.endTime, overView = a.overView, services = a.services, numberOE = a.numberOE, country = a.country, email = a.email, phoneNumber = a.phoneNumber }
                        ).ToList();
        }

        public List<Employer_ViewModels> GetEmployer(int ?id)
        {
            if (id != null)
            {
                return (from a in db.Employers where a.IDCompany == id
                        select new Employer_ViewModels
                        { IDCompany = a.IDCompany, companyName = a.companyName,generalDescription = a.generalDescription,logo = a.logo, avatar = a.avatar, startTime = a.startTime, endTime = a.endTime, overView = a.overView, services = a.services, numberOE = a.numberOE, country = a.country, email = a.email, phoneNumber = a.phoneNumber }
                        ).ToList();

            }
            else return null;
        }

        public List<Employer_ViewModels> GetEmployerByIDJob(int? id)
        {
            if (id != null)
            {
                Job model = db.Jobs.Where(a => a.IDJob == id).FirstOrDefault();
                if (model != null)
                    return GetEmployer(model.IDCompany);
                return null;
            }
            else return null;
        }

        [HttpGet]
        public IQueryable<String> GetOverview(int? id)
        {
            return from a in db.Employers where a.IDCompany == id select a.overView;
        }


        [HttpPost]
        public HttpResponseMessage InsertEmployer(Employer ex)
        {
            try
            {
                if (db.Employers.Where (c => c.email == ex.email).ToList().Count > 0)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.Conflict, "Email was exist.");
                }
                if (db.Employers.Where(c => c.account == ex.account).ToList().Count > 0)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.Conflict, "Account was exist.");
                }
                ex.password = MaHoaMD5.EncodePasswordMd5(ex.password);
                ex.avatar = "default.jpg";
                db.Employers.Add(ex);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Success.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
        [HttpDelete]
        public string DeleteEmployer(int id)
        {
            try
            {
                var vps = db.Employers.Where(a => a.IDCompany == id).ToList();
                foreach (var vp in vps)
                    db.Employers.Remove(vp);
                db.SaveChanges();
                return "Thanh cong!";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }
        [HttpPut]
        public string UpdateEmployer(Employer mode)
        {
            try
            {
                Employer emps = db.Employers.Where(c => c.IDCompany == mode.IDCompany).Single<Employer>();
                emps.companyName = mode.companyName;
                emps.generalDescription = mode.generalDescription;
                emps.logo = mode.logo;
                emps.avatar = mode.avatar;
                emps.startTime = mode.startTime;
                emps.endTime = mode.endTime;
                emps.services = mode.services;
                emps.numberOE = mode.numberOE;
                emps.country = mode.country;
                emps.phoneNumber = mode.phoneNumber;
                emps.email = mode.email;
                db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return "Thanh cong!"; 
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }

        [HttpPut]
        public string UpdateOverview(Employer mode)
        {
            try
            {
                Employer emps = db.Employers.Where(c => c.IDCompany == mode.IDCompany).Single<Employer>();
                emps.overView = mode.overView;
                db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return "Thanh cong!";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }

        [HttpPut]
        public string ChangePassword(ChangePassword_ViewModel mode)
        {
            try
            {
                Employer emps = db.Employers.Where(c => c.IDCompany == mode.ID).Single<Employer>();
                if (emps.password == MaHoaMD5.EncodePasswordMd5(mode.oldPassword))
                {
                    emps.password = MaHoaMD5.EncodePasswordMd5(mode.newPassword);
                    db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                else return "Mat khau sai!";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }

        public List<Review> GetReview(int ?id)
        {
            if (id != null)
            {
                return db.Reviews.Where(a => a.IDCompany == id).ToList<Review>();
            }
            return null;
        }
        public List<Job> GetTop5Jobs(int? id)
        {
            if (id != null)
            {
                return db.Jobs.Where(a => a.IDCompany == id).ToList<Job>();
            }
            return null;
        }

        [HttpPost]
        public string Login(Login login)
        {
            login.password = MaHoaMD5.EncodePasswordMd5(login.password);
            var modelemp = db.Employers.Where(a => a.account == login.account && a.password == login.password).FirstOrDefault();
            if (modelemp != null)
            {
                // Tao token
                #region 
                byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
                byte[] key = Guid.NewGuid().ToByteArray();
                string token = Convert.ToBase64String(time.Concat(key).ToArray());
                #endregion
                listtoken.ds.Add(new Token(modelemp.IDCompany, token,"true"));
                return token;
            }
            return null;
        }
        [HttpGet]
        public bool ForgetPassword(string email, string urlChangePassword)
        {
            Employer ex = new Employer();
            ForgetPasswordController forgetPasswordController = new ForgetPasswordController();
            ex = db.Employers.Where(a => a.email == email).SingleOrDefault();
            if (ex != null)
            {
                MailHelper mail = new MailHelper();
                Random random = new Random();
                const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                string param = new string(Enumerable.Repeat(chars, 20).Select(s => s[random.Next(s.Length)]).ToArray());
                param += long.Parse(DateTime.Now.ToString("yyyyMMddHHmmss")).ToString();
                //Save database
                ForgetPassword forgetPassword = new ForgetPassword { email = email, Type = true, Status = false, ExpirationTime = DateTime.Now.AddMinutes(15), Param = param };

                string content = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/Content/template/forgetPassword.html"));

                content = content.Replace("{{userName}}", ex.companyName);
                content = content.Replace("{{link}}", urlChangePassword + "/" + param);

                if (forgetPasswordController.AddForgetPassword(forgetPassword))
                    mail.SendMail(ex.email, "A Request forgetting the password of your account was sent", content);
                return true;
            }
            return false;
        }
        [HttpPost]
        public bool GetForgetPassword(ForgetPassword_ViewModel forgetPasswordVm)
        {
            try
            {
                string email = null;
                email = db.ForgetPasswords.Where(a => a.Param == forgetPasswordVm.param).FirstOrDefault().email;
                if (email != null)
                {
                    db.Employers.Where(a => a.email == email).FirstOrDefault().password = MaHoaMD5.EncodePasswordMd5(forgetPasswordVm.password);
                    db.SaveChanges();
                    var forgetPassword = db.ForgetPasswords.Where(a => a.email == email).ToList();
                    foreach (ForgetPassword fg in forgetPassword)
                    {
                        db.ForgetPasswords.Remove(fg);
                    }
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
            catch
            {
                return false;
            }
        }
        [HttpGet]
        public List<Employer> SearchEmployers(string id)
        {
            return db.Employers.Where(e => e.companyName.ToLower().Contains(id.ToLower())).ToList();
        }
        [HttpGet]
        public IQueryable SearchEmployersByLocation(string id)
        {
            return (from a in db.Employers
                    join b in db.Branchs on a.IDCompany
                        equals b.IDCompany
                    join c in db.Locations on b.IDLocation
                        equals c.IDLocation
                    where c.locationName.ToLower().Contains(id.ToLower())
                    select new { a });
        }
        [HttpPost]
        public List<Employer> InsertByAdmin(Employer ex)
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                ex.password = MaHoaMD5.EncodePasswordMd5(ex.password);
                ex.avatar = "default.jpg";
                db.Employers.Add(ex);
                db.SaveChanges();
                return db.Employers.ToList();
            }
            return null;

        }
        [HttpPut]
        public bool UpdateByAdmin(Employer ex)
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                Employer emps = db.Employers.Where(c => c.IDCompany == ex.IDCompany).FirstOrDefault<Employer>();
                if (emps != null)
                {
                    db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return true;
                }
            }
            return false;
        }
        [HttpDelete]
        public bool DeleteByAdmin(int id)
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                var em = db.Employers.Find(id);
                if (em != null)
                {
                    db.Employers.Remove(em);
                    db.SaveChanges();
                    return true;
                }
            }
            return false;
        }

    }
}
