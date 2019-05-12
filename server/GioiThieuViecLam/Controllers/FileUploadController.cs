using GioiThieuViecLam.Models.DataModels;
using GioiThieuViecLam.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class FileUploadController : ApiController
    {
        ProfileController profilecontroler = new ProfileController();
        DataContext db = new DataContext();

        [HttpPost]
        public string UploadLogo(){
            var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    var re = Request;
                    var headers = re.Headers;
                    int idUser = 0;
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
                                     idUser = model.IDCompany;
                                     var postedFile = httpRequest.Files[0];
                                     string[] name = postedFile.FileName.Split('.');
                                     var filePath = HttpContext.Current.Server.MapPath("~/images/Company/logo/" + idUser +"-t-."+ name[1]);
                                     postedFile.SaveAs(filePath);
                                     return idUser+"-t-."+name[1];
                                }
                                else
                                {
                                    var model = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                                    idUser = model.IDLaborer;
                                    var postedFile = httpRequest.Files[0];
                                    string[] name = postedFile.FileName.Split('.');
                                    var filePath = HttpContext.Current.Server.MapPath("~/images/LaborerAndAdmin/logo/" + idUser +"-f-."+ name[1]);
                                    postedFile.SaveAs(filePath);
                                    return idUser + "-f-." + name[1];
                                }
                            }
                        }
                    }
                }
            return null;
        }

        [HttpPost]
        public string UploadAvatar()
        {
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                var re = Request;
                var headers = re.Headers;
                int idUser = 0;
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
                                idUser = model.IDCompany;
                                var postedFile = httpRequest.Files[0];
                                string[] name = postedFile.FileName.Split('.');
                                var filePath = HttpContext.Current.Server.MapPath("~/images/Company/avatar/" + idUser + "-t-." + name[1]);
                                postedFile.SaveAs(filePath);
                                return idUser + "-t-." + name[1];
                            }
                            else
                            {
                                var model = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                                idUser = model.IDLaborer;
                                var postedFile = httpRequest.Files[0];
                                string[] name = postedFile.FileName.Split('.');
                                var filePath = HttpContext.Current.Server.MapPath("~/images/LaborerAndAdmin/avatar/" + idUser + "-f-." + name[1]);
                                postedFile.SaveAs(filePath);
                                return idUser + "-f-." + name[1];
                            }
                        }
                    }
                }
            }
            return null;
        }
        public string UploadCV(){
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                var re = Request;
                var headers = re.Headers;
                int idUser = 0;
                if (headers.Contains("Authorization"))
                {
                    string token = headers.GetValues("Authorization").First();
                    foreach (Token tk in listtoken.ds)
                    {
                        if (tk.token == token)
                        {
                            if (tk.IDtype == "false")
                            {
                                var model = db.LaborerandAdmins.Where(a => a.IDLaborer == tk.ID).FirstOrDefault();
                                idUser = model.IDLaborer;
                                var postedFile = httpRequest.Files[0];
                                string[] name = postedFile.FileName.Split('.');
                                var filePath = HttpContext.Current.Server.MapPath("~/images/LaborerAndAdmin/cv/" + idUser+ "."+name[1]);
                                postedFile.SaveAs(filePath);
                                return idUser + "." + name[1];
                            }
                        }
                    }
                }
            }
            return "";
        }
    }
}
