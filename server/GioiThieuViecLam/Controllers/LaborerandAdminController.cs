using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GioiThieuViecLam.Models.DataModels;
using GioiThieuViecLam.Models.ViewModels;
using GioiThieuViecLam.Models.BusinessModels;
using Common;

namespace GioiThieuViecLam.Controllers
{
    public class LaborerandAdminController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        SkillController skillContr = new SkillController();
        [HttpPost]
        public string Login(Login login)
        {
            login.password = MaHoaMD5.EncodePasswordMd5(login.password);
            var modelemp = db.LaborerandAdmins.Where(a => a.account == login.account && a.password == login.password).FirstOrDefault();
            if (modelemp != null)
            {
                // Tao token
                #region
                byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
                byte[] key = Guid.NewGuid().ToByteArray();
                string token = Convert.ToBase64String(time.Concat(key).ToArray());
                #endregion
                listtoken.ds.Add(new Token(modelemp.IDLaborer, token, "false"));
                return token;
            }
            return null;
        }
        public IQueryable<LaborerandAdmin> GetLaborerandAdmin(int? id)
        {
            if (id != null)
            {
                return from a in db.LaborerandAdmins where a.IDLaborer == id select a;
            }
            else return null;
        }
        public LaborerAndAdmin_ViewModels GetLaborerandAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            int id = profilectrl.GetID(token);
            if (id != 0)
            {
                LaborerandAdmin current = db.LaborerandAdmins.Where(a => a.IDLaborer == id).FirstOrDefault();
                LaborerAndAdmin_ViewModels la = new LaborerAndAdmin_ViewModels(current.laborerName, current.dateOfBirth, current.sex, current.email, current.phoneNumber, current.description, current.cV, current.avatar, skillContr.GetSkills(current.IDLaborer));
                return la;
            }
            return null;
        }
        [HttpPost]
        public HttpResponseMessage InsertLaborer(LaborerandAdmin ex)
        {
            HttpResponseMessage resp;
            try
            {
                if (db.LaborerandAdmins.Where (c => c.email == ex.email).ToList().Count > 0)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.Conflict, "Email was exist.");
                }
                if (db.LaborerandAdmins.Where(c => c.account == ex.account).ToList().Count > 0)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.Conflict, "Account was exist.");
                }
                if (String.IsNullOrEmpty(ex.avatar))
                {
                    ex.avatar = "default.jpg";
                }
                db.LaborerandAdmins.Add(ex);
                ex.auth = true;
                ex.password = MaHoaMD5.EncodePasswordMd5(ex.password);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Success.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
        [HttpDelete]
        public string DeleteLaborerandAdmin(int id)
        {
            try
            {
                var vps = db.LaborerandAdmins.Where(a => a.IDLaborer == id).ToList();
                foreach (var vp in vps)
                    db.LaborerandAdmins.Remove(vp);
                db.SaveChanges();
                return "Thanh cong!";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        [HttpPut]
        public List<LaborerandAdmin> UpdateLaborerandAdmin(LaborerandAdmin mode)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    LaborerandAdmin emps = db.LaborerandAdmins.Where(c => c.IDLaborer == id).Single<LaborerandAdmin>();
                    emps.laborerName = mode.laborerName;
                    emps.dateOfBirth = mode.dateOfBirth;
                    emps.sex = mode.sex;
                    emps.avatar = mode.avatar;
                    emps.description = mode.description;
                    emps.cV = mode.cV;
                    emps.phoneNumber = mode.phoneNumber;
                    emps.email = mode.email;
                    db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return db.LaborerandAdmins.ToList();
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
        public string ChangePassword(ChangePassword_ViewModel mode)
        {
            try
            {
                LaborerandAdmin emps = db.LaborerandAdmins.Where(c => c.IDLaborer == mode.ID).Single<LaborerandAdmin>();
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
        [HttpGet]
        public List<LaborerandAdmin> GetAllLaborerandAdminByAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
                return db.LaborerandAdmins.ToList<LaborerandAdmin>();
            return null;
        }
        [HttpPost]
        public List<LaborerandAdmin> InsertByAdmin(LaborerandAdmin ex)
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                ex.password = MaHoaMD5.EncodePasswordMd5(ex.password);
                ex.avatar = "default.jpg";
                db.LaborerandAdmins.Add(ex);
                db.SaveChanges();
                return db.LaborerandAdmins.ToList();
            }
            return null;
        }
        [HttpPut]
        public bool UpdateByAdmin(LaborerandAdmin mode)
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                LaborerandAdmin emps = db.LaborerandAdmins.Where(c => c.IDLaborer == mode.IDLaborer).FirstOrDefault<LaborerandAdmin>();
                if (emps != null)
                {
                    emps.laborerName = mode.laborerName;
                    emps.dateOfBirth = mode.dateOfBirth;
                    emps.sex = mode.sex;
                    emps.avatar = mode.avatar;
                    emps.description = mode.description;
                    emps.cV = mode.cV;
                    emps.phoneNumber = mode.phoneNumber;
                    emps.email = mode.email;
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
                var em = db.LaborerandAdmins.Find(id);
                if (em != null)
                {
                    db.LaborerandAdmins.Remove(em);
                    db.SaveChanges();
                    return true;
                }
            }
            return false;
        }
        [HttpGet]
        public bool ForgetPassword(string email, string urlChangePassword)
        {
            LaborerandAdmin ex = new LaborerandAdmin();
            ForgetPasswordController forgetPasswordController = new ForgetPasswordController();

            ex = db.LaborerandAdmins.Where(a => a.email == email).SingleOrDefault();
            if (ex != null)
            {
                MailHelper mail = new MailHelper();
                Random random = new Random();
                const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                string param = new string(Enumerable.Repeat(chars, 20).Select(s => s[random.Next(s.Length)]).ToArray());
                param += long.Parse(DateTime.Now.ToString("yyyyMMddHHmmss")).ToString();
                //Save database
                ForgetPassword forgetPassword = new ForgetPassword { email = email, Type = false, Status = false, ExpirationTime = DateTime.Now.AddMinutes(15), Param = param };

                string content = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/Content/template/forgetPassword.html"));

                content = content.Replace("{{userName}}", ex.laborerName);
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
                    db.LaborerandAdmins.Where(a => a.email == email).FirstOrDefault().password = MaHoaMD5.EncodePasswordMd5(forgetPasswordVm.password);
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
        public List<LaborerandAdmin> GetListAdminAccountByAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                return db.LaborerandAdmins.Where(l => l.auth == false).ToList();
            }
            return null;
        }
        [HttpGet]
        public List<LaborerandAdmin> GetListLaborerAccountByAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true)
            {
                return db.LaborerandAdmins.Where(l => l.auth == true).ToList();
            }
            return null;
        }
    }
}
