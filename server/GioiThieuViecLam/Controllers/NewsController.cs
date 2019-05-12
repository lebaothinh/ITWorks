using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Common;

namespace GioiThieuViecLam.Controllers
{
    public class NewsController : ApiController
    {
        //specify functions -> method on each -> object using -> input type -> return type 
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        //Get top 10 news lastest.
        [HttpGet]
        public List<News> GetTop10NewsLastest()
        {
            return db.News.OrderByDescending(a => a.WritingDate).Take(10).ToList();
        } 
        //Get top 10 news popular
        [HttpGet]
        public List<News> GetTop10NewsPopular()
        {
            return db.News.OrderByDescending(a => a.NumberOfLikes).Take(10).ToList();
        }
        //Insert a news
        [HttpPost]
        public List<News> InsertNews(News news)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                        db.News.Add(news);
                        db.SaveChanges();
                        return db.News.ToList<News>();
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        //Delete a news
        [HttpDelete]
        public bool DeleteNews(int? id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idAdmin = profilectrl.GetID(token);
                if (idAdmin != 0)
                {
                    News news = new News();
                    news = db.News.Where(a => a.NewsId == id).FirstOrDefault();
                    // not clearly.
                    if (profilectrl.checkAdmin(token) || idAdmin == news.AuthorId)
                    {
                        db.News.Remove(news);
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
        //Update a news
        [HttpPut]
        public bool UpdateNews(News newNews)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idAdmin = profilectrl.GetID(token);
                if (idAdmin != 0)
                {
                    News oldNews = new News();
                    oldNews = db.News.Where(a => a.NewsId == newNews.NewsId).FirstOrDefault();
                    // not clearly.
                    if (profilectrl.checkAdmin(token) || idAdmin == oldNews.AuthorId)
                    {
                        oldNews.Avartar = newNews.Avartar;
                        oldNews.Content = newNews.Content;
                        oldNews.GeneralDescription = newNews.GeneralDescription;
                        oldNews.Title = newNews.Title;
                        oldNews.TypeOfNewsId = newNews.TypeOfNewsId;
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
        //Search a news
        [HttpGet]
        public IQueryable SearchNews (string id)
        {
            id = id.ToLower().ConvertToBasicCharacters();
            //Search in author name, title, content, genaral description, writing date, typename.
            return (from a in db.News
                    join b in db.TypeOfNews on a.TypeOfNewsId equals b.TypeId
                    where a.Title.ToLower().Contains(id) || 
                          a.Content.ToLower().Contains(id) || 
                          a.GeneralDescription.ToLower().Contains(id) || 
                          b.TypeName.ToLower().Contains(id)
                    select new { a });

        }
    }
}
