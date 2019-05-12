using GioiThieuViecLam.Models.DataModels;
using GioiThieuViecLam.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Results;
using System.Xml;

namespace GioiThieuViecLam.Controllers
{
    public class CVController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        [HttpGet]
        public FullLaborer_ViewModel GetCV(int? id)
        {
            var e = from a in db.CVs join b in db.LaborerandAdmins on a.LaborerId equals b.IDLaborer where a.LaborerId == id select new
            { b.laborerName, b.email, b.phoneNumber, b.sex, b.avatar, a.Address, a.ApplyPosition, a.Awards, a.Character, a.DetailInformation, a.Education, a.GPA,
                a.Hobbies, a.LaborerId, a.Languages, a.Major, a.Objective, a.ShortDescription, a.Skills, a.SoftSkills, a.WorkExperience };
            FullLaborer_ViewModel la = new FullLaborer_ViewModel();
            foreach (var o in e)
            {
                la.Name = o.laborerName;
                la.Phone = o.phoneNumber;
                la.Email = o.email;
                la.Gender = o.sex;
                la.Avatar = "/LaborerAndAdmin/avatar/" + o.avatar;
                la.Address = o.Address;
                la.ApplyPosition = o.ApplyPosition;
                la.Awards = o.Awards;
                la.Character = o.Character;
                la.DetailInformation = o.DetailInformation;
                la.Education = o.Education;
                la.GPA = o.GPA;
                la.Hobbies = o.Hobbies;
                la.LaborerId = o.LaborerId;
                la.Languages = o.Languages;
                la.Major = o.Major;
                la.Objective = o.Objective;
                la.ShortDescription = o.ShortDescription;
                la.Skills = o.Skills;
                la.SoftSkills = o.SoftSkills;
                la.WorkExperience = o.WorkExperience;
            }
            return la;
        }
        [HttpGet]
        public bool CheckCV()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (db.CVs.Where(a => a.LaborerId == idLaborer).Count() > 0) return true;
                }
                return false;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return false;
            }
        }
        [HttpGet]
        public CV CreateOrUpdate()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    CV ex = null;
                    ex = db.CVs.Where(a => a.LaborerId == idLaborer).SingleOrDefault();
                    if (ex != null) return ex;
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return null;
            }
        }
        [HttpPost]
        public string InsertCV(CV cV)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    cV.LaborerId = idLaborer;
                    db.CVs.Add(cV);
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                return null;

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
        [HttpPut]
        public string UpdateCV(CV cV)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    CV cv = null;
                    cv = db.CVs.Where(a => a.LaborerId == idLaborer).SingleOrDefault();
                    cv.Address = cV.Address;
                    cv.ApplyPosition = cV.ApplyPosition;
                    cv.Awards = cV.Awards;
                    cv.Character = cV.Character;
                    cv.DetailInformation = cV.DetailInformation;
                    cv.Education = cV.Education;
                    cv.GPA = cV.GPA;
                    cv.Hobbies = cV.Hobbies;
                    cv.Languages = cV.Languages;
                    cv.Major = cV.Major;
                    cv.Objective = cV.Objective;
                    cv.ShortDescription = cV.ShortDescription;
                    cv.Skills = cV.Skills;
                    cv.SoftSkills = cV.SoftSkills;
                    cv.WorkExperience = cV.WorkExperience;
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                return null;

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
        [HttpPost]
        public List<CVShortcut_ViewModel> SearchCVShortcut(Search_ViewModel search)
        {
            if (search.key == "") return GetTop10CVNewest();
            // Select laborer id
            var e = (from a in db.Skills
                     join b in db.Laborer_Skills on a.IDSkill equals b.IDSkill
                     join c in db.CVs on b.IDLaborer equals c.LaborerId
                     join d in db.LaborerandAdmins on c.LaborerId equals d.IDLaborer
                     where a.skillName.ToLower().Contains(search.key.ToLower()) ||
                      c.Languages.ToLower().Contains(search.key.ToLower()) ||
                      c.Major.ToLower().Contains(search.key.ToLower()) ||
                      c.DetailInformation.ToLower().Contains(search.key.ToLower()) ||
                      c.ShortDescription.ToLower().Contains(search.key.ToLower()) ||
                      d.laborerName.ToLower().Contains(search.key.ToLower())
                     select new CVShortcut_ViewModel
                     {
                         IDLaborer = d.IDLaborer,
                         Name = d.laborerName,
                         Avatar = d.avatar,
                         Description = c.ShortDescription
                     }).Distinct<CVShortcut_ViewModel>();

            // Select information of laborer 
            List<CVShortcut_ViewModel> result = e.ToList<CVShortcut_ViewModel>();

            foreach (CVShortcut_ViewModel o in result)
            {
                o.arrSkills = GetList(o.IDLaborer);
            }
            return result;
        }

        public List<CVShortcut_ViewModel> GetTop10CVNewest()
        {
            var e = from a in db.CVs
                    join b in db.LaborerandAdmins on a.LaborerId equals b.IDLaborer
                    select new CVShortcut_ViewModel
                    {
                        IDLaborer = b.IDLaborer,
                        Name = b.laborerName,
                        Avatar = b.avatar,
                        Description = a.ShortDescription
                    };

            List<CVShortcut_ViewModel> result = e.ToList<CVShortcut_ViewModel>();
            foreach (CVShortcut_ViewModel o in result)
            {
                o.arrSkills = this.GetList(o.IDLaborer);
            }
            return result;
        }

        public List<Skill> GetList(int? id)
        {
            return (from a in db.Skills
                    join b in db.Laborer_Skills
                    on a.IDSkill equals b.IDSkill
                    where b.IDLaborer == id
                    select a).ToList();
        }
        public string DownloadCV(int? id)
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
                                  join b in db.Jobs on a.IDJob equals b.IDJob
                                  where a.IDLaborer == id && b.IDCompany == idEmployer
                                  select a).ToList();
                    if (result.Count > 0)
                    {
                        string fileName = db.LaborerandAdmins.Where(l => l.IDLaborer == id).FirstOrDefault().cV;
                        if (fileName == null) return "";
                        string Url = HttpContext.Current.Request.Url.Authority;
                        string UrlImage = "/images/LaborerAndAdmin/cv/";
                        return "Http://" + Url + "/" + UrlImage + fileName;
                    }
                }
                return "";

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }

        public class ResultString
        {
            public ResultString(string r)
            {
                this.result = r;
            }
            public string result { get; set; }
        } 
        public ResultString GetLinkCV (int? id)
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
                                  join b in db.Jobs on a.IDJob equals b.IDJob
                                  where a.IDLaborer == id && b.IDCompany == idEmployer
                                  select a).ToList();
                    if (result.Count > 0)
                    {
                        string fileName = db.LaborerandAdmins.Where(l => l.IDLaborer == id).FirstOrDefault().cV;
                        if (fileName == null) new ResultString("");
                        string Url = HttpContext.Current.Request.Url.Authority;
                        string UrlImage = "/images/LaborerAndAdmin/cv/";
                            return new ResultString("Http://" + Url + "/" + UrlImage + fileName);
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
    }
}
