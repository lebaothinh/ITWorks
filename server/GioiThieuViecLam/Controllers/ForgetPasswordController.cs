using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class ForgetPasswordController : ApiController
    {
        //Add request forget password
        DataContext db = new DataContext();
        public bool AddForgetPassword(ForgetPassword forgetPassword)
        {
            try
            {
                //forgetPassword.ForgetPasswordId = 0;
                List<ForgetPassword> model = db.ForgetPasswords.Where(a => a.email == forgetPassword.email).ToList();
                foreach (ForgetPassword fp in model)
                {
                    db.ForgetPasswords.Remove(fp);
                }
                db.SaveChanges();
                db.ForgetPasswords.Add(forgetPassword);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        [HttpGet]
        public bool isExist(string id)
        {
            ForgetPassword fp = db.ForgetPasswords.Where(a => a.Param == id).FirstOrDefault();
            if (fp != null && fp.ExpirationTime>DateTime.Now)
                return true;
            return false;
        }
        [HttpGet]
        public bool isType(string id)
        {
            ForgetPassword fp = db.ForgetPasswords.Where(a => a.Param == id).FirstOrDefault();
            if (fp != null && fp.Type == true)
                return true;
            return false;
        }
    }
}
