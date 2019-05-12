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
    public class RegisterPackagesController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();

        public List<RegisterPackage> GetAllPackages()
        {
            return db.RegisterPackages.ToList();
        }

        public List<RegisterPackage_ViewModel> GetAllPackagesStatus()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    List<RegisterPackage_ViewModel> result = (from a in db.RegisterPackages
                                                              select new RegisterPackage_ViewModel { discount = a.discount, IDRegisterPackage = a.IDRegisterPackage, fee = a.fee, registerPackageName = a.registerPackageName, registerStatus = false }).ToList();
                    List<RegisterList> registerList = db.RegisterList.Where(r => r.IDEmployer == idEmployer).ToList();
                    foreach (RegisterPackage_ViewModel rp in result)
                    {
                        if (registerList.Where(x => x.IDRegisterPackage == rp.IDRegisterPackage).Count() > 0)
                        {
                            rp.registerStatus = true;
                            rp.exDate = registerList.Where(r => r.IDRegisterPackage == rp.IDRegisterPackage).SingleOrDefault().registerEx;
                        }
                    }
                    return result;
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

    }
}
