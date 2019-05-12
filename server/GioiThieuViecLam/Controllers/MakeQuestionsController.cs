using GioiThieuViecLam.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GioiThieuViecLam.Controllers
{
    public class MakeQuestionsController : ApiController
    {
        DataContext db = new DataContext();
        ProfileController profilectrl = new ProfileController();
        //Get all question of a company order by newest day.
        public List<MakeQuestion> GetAllQuestionByCompany ()
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    return db.MakeQuestions.Where(a => a.IDCompany == idEmployer && a.Answer == "").OrderByDescending(a => a.MakeQuestionDate).ToList<MakeQuestion>();
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
        public List<MakeQuestion> GetAllQuestion(int ?id)
        {
            return db.MakeQuestions.Where(a => a.IDCompany == id && a.Status == true).OrderByDescending(a => a.MakeQuestionDate).ToList<MakeQuestion>();
        }
        [HttpPut]
        public bool AnswerQuestion(MakeQuestion question)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idEmployer = profilectrl.GetID(token);
                if (idEmployer != 0)
                {
                    MakeQuestion makeQuestion = db.MakeQuestions.Where(m => m.IDCompany == idEmployer && m.IDMakeQuestion == question.IDMakeQuestion).FirstOrDefault();
                    if (makeQuestion != null)
                    {
                        makeQuestion.Answer = question.Answer;
                        makeQuestion.Status = true;
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
        //Add a question
        public bool AddAQuestion (MakeQuestion question)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    question.MakeQuestionDate = DateTime.Now;
                    question.Status = false;
                    question.IDLaborer = idLaborer;
                    db.MakeQuestions.Add(question);
                    db.SaveChanges();
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
        //Update the question // laborer => status = false;
        public bool UpdateQuestionByLaborer (MakeQuestion updatedQuestion)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    MakeQuestion oldQuestion = new MakeQuestion();
                    oldQuestion = db.MakeQuestions.Where(a => a.IDMakeQuestion == updatedQuestion.IDMakeQuestion).SingleOrDefault();
                    oldQuestion.MakeQuestionDate = DateTime.Now;
                    oldQuestion.Status = updatedQuestion.Status;
                    oldQuestion.Title = updatedQuestion.Title;
                    oldQuestion.Content = updatedQuestion.Content;
                    db.Entry(oldQuestion).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
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
        //Remove a question // admin
        public bool RemoveQuestionByAdmin (int? id)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        MakeQuestion question = new MakeQuestion();
                        question = db.MakeQuestions.Where(a => a.IDMakeQuestion == id).SingleOrDefault();
                        db.MakeQuestions.Remove(question);
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
        //Answer and update a question // admin
        public bool AnswerQuestionByAdmin (MakeQuestion updatedQuestion)
        {
            try
            {
                string token = Request.Headers.GetValues("Authorization").First();
                int idLaborer = profilectrl.GetID(token);
                if (idLaborer != 0)
                {
                    if (profilectrl.checkAdmin(token))
                    {
                        MakeQuestion oldQuestion = new MakeQuestion();
                        oldQuestion = db.MakeQuestions.Where(a => a.IDMakeQuestion == updatedQuestion.IDMakeQuestion).SingleOrDefault();
                        oldQuestion.Status = true;
                        oldQuestion.Answer = updatedQuestion.Answer;
                        db.Entry(oldQuestion).State = System.Data.Entity.EntityState.Modified;
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
