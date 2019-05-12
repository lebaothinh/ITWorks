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
    public class ReviewController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        [HttpGet]
        public List<Review> GetReviewsByIDCompany(int ?idEmployer)
        {
            try
            {
                if (idEmployer != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    return db.Reviews.Where(a => a.IDCompany == idEmployer).ToList();
                }
                return null;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        [HttpGet]
        public List<Review> GetReviewsByLaborer()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    return db.Reviews.Where(a => a.IDLaborer == idLaborer).ToList();
                }
                return null;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        [HttpPost]
        public string InsertReview(Review ex)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    if (db.Reviews.Where(a => a.IDLaborer == id && a.IDCompany == ex.IDCompany).ToList().Count == 0)
                    {
                        ex.IDLaborer = id;
                        db.Reviews.Add(ex);
                        db.SaveChanges();
                        return "Thanh cong!";
                    }
                    else
                    {
                        return UpdateReview(ex);
                    }
                }
                else return "";
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
        [HttpDelete]
        public string DeleteReview (int? idEmployer)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    var vps = db.Reviews.Where(a => a.IDCompany == idEmployer && a.IDLaborer == idLaborer).ToList();
                    foreach (var vp in vps)
                        db.Reviews.Remove(vp);
                    db.SaveChanges();
                    return "Thanh cong!";
                }
                return "";

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
        public string UpdateReview (Review mode)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int id = profilectrl.GetID(token);
                if (id != 0)
                {
                    // Xác thực employer thuộc quyền sở hữu job
                    //-----
                    Review emps = db.Reviews.Where(c => c.IDCompany == mode.IDCompany && c.IDLaborer == id).Single<Review>();
                    emps.title = mode.title;
                    emps.star = mode.star;
                    emps.reviewDate = mode.reviewDate;
                    emps.recommendation = mode.recommendation;
                    emps.like = mode.like;
                    emps.dislike = mode.dislike;
                    db.Entry(emps).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return "Thanh cong!";

                }
                return "";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return e.ToString();
            }
        }

        [HttpGet]
        public Star_ViewModels SumReview(int? id)
        {
            int star1 = 0;
            int star2 = 0;
            int star3 = 0;
            int star4 = 0;
            int star5 = 0;
            int sumReview = 0;
            float avgStar = 0;
            int recommendation = 0;
            int notRecommendation = 0;
            List<Review> reviewCompany = db.Reviews.Where(a => a.IDCompany == id).ToList<Review>();
            sumReview = reviewCompany.Count;
            foreach (Review review in reviewCompany)
            {
                if (review.recommendation == true) recommendation++;
                if (review.recommendation == false) notRecommendation++;
                if (review.star == 1) star1++;
                else if (review.star == 2) star2++;
                else if (review.star == 3) star3++;
                else if (review.star == 4) star4++;
                else if (review.star == 5) star5++;
                avgStar += review.star;
            }
            avgStar /= reviewCompany.Count;
            Star_ViewModels listStar = new Star_ViewModels();
            listStar.star1 = star1;
            listStar.star2 = star2;
            listStar.star3 = star3;
            listStar.star4 = star4;
            listStar.star5 = star5;
            listStar.recommendationFalse = notRecommendation;
            listStar.recommendationTrue = recommendation;
            listStar.totalStar = sumReview;
            listStar.avgStar = avgStar;
            return listStar;
        }

       
        [HttpGet]
        public IQueryable NewestReview(int? id)
        {
            if (id != null)
            {
                return (from a in db.Reviews where a.IDCompany == id orderby a.reviewDate descending select a).Take(3);
            }
            else
            {
                return null;
            }
        }
        [HttpGet]
        public List<Review> GetAllReviewByAdmin()
        {
            string token = Request.Headers.GetValues("Authorization").First();
            if (profilectrl.checkAdmin(token) == true) return db.Reviews.ToList<Review>();
            return null;
        }
        [HttpDelete ]
        public bool DeleteReviewByAdmin(int ?idCompany, int ?idLaborer)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                if (profilectrl.checkAdmin(token) == true)
                {
                    var model = db.Reviews.Where(a => a.IDCompany == idCompany && a.IDLaborer == idLaborer).Single<Review>();
                    db.Reviews.Remove(model);
                    db.SaveChanges();
                    return true;
                }
            }
            catch
            {
                return false;
            }
            return false;
        }
    }
}
