using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class TypeOfNewsController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        //Get all type of news
        [HttpGet]
        public List<TypeOfNews> GetAllTypesOfNews()
        {
            return db.TypeOfNews.ToList<TypeOfNews>();
        }
        //Add a type of news
        [HttpPost]
        public List<TypeOfNews> InsertTypeOfNews (TypeOfNews typeOfNews)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        db.TypeOfNews.Add(typeOfNews);
                        db.SaveChanges();
                        return db.TypeOfNews.ToList<TypeOfNews>();
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
        //Delete a type of news
        [HttpDelete]
        public bool DeleteTypeOfNews(int ?id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idAdmin = profilectrl.GetID(token);
                if (idAdmin != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        TypeOfNews typeOfNews = new TypeOfNews();
                        typeOfNews = db.TypeOfNews.Where(a => a.TypeId == id).FirstOrDefault();
                        db.TypeOfNews.Remove(typeOfNews);
                        db.SaveChanges();
                        return true;
                    }
                }
                return false;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        //Update a type of news.
        [HttpPost]
        public bool UpdateTypeOfNews(TypeOfNews newTypeOfNews)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idAdmin = profilectrl.GetID(token);
                if (idAdmin != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        TypeOfNews oldTypeOfNews = new TypeOfNews();
                        oldTypeOfNews = db.TypeOfNews.Where(a => a.TypeId == newTypeOfNews.TypeId).FirstOrDefault();
                        oldTypeOfNews.TypeName = newTypeOfNews.TypeName;
                        db.SaveChanges();
                        return true;
                    }
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
