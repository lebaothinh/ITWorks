using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class LocationController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();

        [HttpGet]
        public List<Location> GetLocations(int? id)
        {
            List<Location> listlocation = new List<Location>();
            if (id != null)
            {
                var ex = from a in db.Locations
                         join b in db.Branchs
                         on a.IDLocation equals b.IDLocation
                         where b.IDCompany == id
                         select new { a.IDLocation, a.locationName, a.map };
                foreach (var a in ex)
                {
                    Location l = new Location();
                    l.IDLocation = a.IDLocation;
                    l.locationName = a.locationName;
                    l.map = a.map;
                    listlocation.Add(l);
                }
                return listlocation;
            }
            else return null;
        }

        [HttpGet]
        public List<Location> GetLocationsByToken()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            int id = profilectrl.GetID(token);
            if (id != 0)
            {
                List<Location> listlocation = new List<Location>();
                var ex = from a in db.Locations
                         join b in db.Branchs
                         on a.IDLocation equals b.IDLocation
                         where b.IDCompany == id
                         select new { a.IDLocation, a.locationName, a.map };
                foreach (var a in ex)
                {
                    Location l = new Location();
                    l.IDLocation = a.IDLocation;
                    l.locationName = a.locationName;
                    l.map = a.map;
                    listlocation.Add(l);
                }
                return listlocation;
            }
            return null;
        }


        [HttpGet]
        public Location GetLocation(int? id)
        {
            return db.Locations.Where(a => a.IDLocation == id).FirstOrDefault();
        }

        [HttpPost]
        public int InsertLocation(Location ex)
        {
            try
            {
                db.Locations.Add(ex);
                db.SaveChanges();
                var idMax = db.Locations.Max(a => a.IDLocation);
                return db.Locations.First(x => x.IDLocation == idMax).IDLocation;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // Make some adjustments.
                // ...
                // Try again.
                return -1;
            }
        }

        [HttpDelete]
        public string DeleteLocation(int? id)
        {
            try
            {
                var vps = db.Locations.Where(a => a.IDLocation == id).ToList();
                foreach (var vp in vps)
                    db.Locations.Remove(vp);
                Branch sa = db.Branchs.Where(a => a.IDLocation == id).FirstOrDefault();
                db.Branchs.Remove(sa);
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
        public string UpdateLocation(Location mode)
        {
            try
            {
                Location emps = db.Locations.Where(c => c.IDLocation == mode.IDLocation).Single<Location>();
                emps.locationName = mode.locationName;
                emps.map = mode.map;
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
    }
}
