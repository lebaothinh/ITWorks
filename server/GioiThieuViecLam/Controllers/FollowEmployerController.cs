using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class FollowEmployerController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        //Get Number of folower.
        [HttpGet]
        public int GetNumberOfFollower (int ?id)
        {
            return db.FollowEmployers.Where(c => c.IDCompany == id).Count();
        }
        [HttpGet]
        public bool GetStatusFollow(int ?id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (db.FollowEmployers.Where(a => a.IDCompany == id && a.IDLaborer == idLaborer).Count() > 0)
                        return true;
                }
                return false;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        [HttpGet]
        public string SetStatusFollow(int ?id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (db.FollowEmployers.Where(a => a.IDCompany == id && a.IDLaborer == idLaborer).Count() > 0)
                    {
                        FollowEmployer fe = new FollowEmployer();
                        fe = db.FollowEmployers.Where(a => a.IDCompany == id && a.IDLaborer == idLaborer).SingleOrDefault();
                        db.FollowEmployers.Remove(fe);
                        db.SaveChanges();
                        return "false";
                    }
                    else
                    {
                        db.FollowEmployers.Add(new FollowEmployer { IDCompany = Convert.ToInt32(id), IDLaborer = idLaborer, FollowingDate = DateTime.Now });
                        db.SaveChanges();
                        return "true";
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
        //[HttpPost]
        //public bool SetStatusFollowFalse(int ?id)
        //{
        //    try
        //    {
        //        string token = Request.Headers.GetValues("Authorization").First();
        //        int idLaborer = profilectrl.GetID(token);
        //        if (idLaborer != 0)
        //        {
        //            if (db.FollowEmployers.Where(a => a.IDCompany == id && a.IDLaborer == idLaborer).Count() > 0)
        //            {
        //                FollowEmployer fe = new FollowEmployer();
        //                fe = db.FollowEmployers.Where(a => a.IDCompany == id && a.IDLaborer == idLaborer).SingleOrDefault();
        //                db.FollowEmployers.Remove(fe);
        //                db.SaveChanges();
        //                return true;
        //            }
        //        }
        //        return false;
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e);
        //        throw e;
        //    }
        //}

    }
}
