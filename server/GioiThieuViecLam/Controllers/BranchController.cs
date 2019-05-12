using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class BranchController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
       
        [HttpPost]
        public string InsertBranch(Branch ex){
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idCompany = profilectrl.GetID(token);
                if (idCompany != 0 && idCompany == ex.IDCompany)
                {
                        db.Branchs.Add(ex);
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
        public string DeleteBranch (Branch ex)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        Branch branch = new Branch();
                        branch = db.Branchs.Where(a => a.IDCompany == ex.IDCompany && a.IDLocation == ex.IDLocation).SingleOrDefault();
                        db.Branchs.Remove(branch);
                        return "Thanh cong!";
                    }
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
    }
}
