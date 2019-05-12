using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GioiThieuViecLam.Models.ViewModels;
using GioiThieuViecLam.Models.DataModels;
namespace GioiThieuViecLam.Controllers
{
    public class ProfileController : ApiController
    {
        DataContext db = new DataContext();
        [HttpGet]
        public string GetAvatar()
        {
            var re = Request;
            var headers = re.Headers;
            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").First();
                foreach (Token tk in listtoken.ds)
                {
                    if (tk.token == token)
                    {
                        if (tk.IDtype=="true")
                        {
                            var modelem = db.Employers.Where(a => a.IDCompany == tk.ID).FirstOrDefault();
                            return "/Company/logo/" + modelem.logo;
                        }
                        var modella = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                        return "/LaborerandAdmin/avatar/" + modella.avatar;
                    }
                }
            }
            return null;
        }
        public int GetID()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").First();
                foreach (Token tk in listtoken.ds)
                {
                    if (tk.token == token)
                    {
                        if (tk.IDtype == "true")
                        {
                            var model = db.Employers.Where(a => a.IDCompany == tk.ID).FirstOrDefault();
                            return model.IDCompany;
                        }
                        else
                        {
                            var model = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                            return model.IDLaborer;
                        }
                    }
                }
            }
            return 0;
        }

        public int GetID(string token)
        {
           foreach (Token tk in listtoken.ds)
           {
               if (tk.token == token)
               {
                   if (tk.IDtype == "true")
                   {
                        var model = db.Employers.Where(a => a.IDCompany == tk.ID).FirstOrDefault();
                        return model.IDCompany;
                   }
                   else
                   {
                        var model = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                        return model.IDLaborer;
                   }
                }
            }
           return 0;
        }
        [HttpGet]
        public string Logout()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").First();
                foreach (Token tk in listtoken.ds)
                {
                    if (tk.token == token)
                    {
                        listtoken.ds.Remove(tk);
                        return "true";
                    }
                }
            }
            return "false";
        }

        [HttpGet]
        public bool AuthLaborer()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").FirstOrDefault();
                if (listtoken.ds.Where(c => c.token == token && c.IDtype == "false").ToList().Count > 0) return true;
            }
            return false;
        }

        [HttpGet]
        public bool AuthCompany()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").FirstOrDefault();
                if (listtoken.ds.Where(c => c.token == token && c.IDtype == "true").ToList().Count > 0) return true;
            }
            return false;
        }

        [HttpGet]
        public bool AuthAdmin()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").FirstOrDefault();
                if (listtoken.ds.Where(c => c.token == token && c.IDtype == "false").ToList().Count > 0) {
                    return checkAdmin(token);
                }
            }
            return false;
        }

        [HttpGet]
        public string TestTypeUser()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("Authorization"))
            {
                string token = headers.GetValues("Authorization").First();
                foreach (Token tk in listtoken.ds)
                {
                    if (tk.token == token)
                    {
                        if (tk.IDtype == "true")
                            return "true";
                        return "false";
                    }
                }
            }
            return "";
        }

        public bool checkAdmin(string token)
        {
            try
            {
                int id = GetID(token);
                if (id != 0)
                {
                    var model = db.LaborerandAdmins.Where(a => a.IDLaborer == id).Single<LaborerandAdmin>();
                    if (model.auth == false) return true;
                    return false;
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
