using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GioiThieuViecLam.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EditorController : ApiController
    {
        public class FileUpload
        {
            public string fileName { get; set; }
            public int uploaded { get; set; }
            public string url { get; set; }
        }
        public class TinyFile
        {
            public string fileName { get; set; }
            public string location {get;set;}
        }
        [HttpPost]
        public IHttpActionResult CKEditorUploadFiles()
        {
            string Url = HttpContext.Current.Request.Url.Authority;
            string UrlImage = "/images/GeneralImages/";
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files[0];
            string[] name = postedFile.FileName.Split('.');
            long time = (DateTime.Now.Ticks) / TimeSpan.TicksPerMillisecond;
            var filePath = HttpContext.Current.Server.MapPath("~" + UrlImage + time.ToString() + "." + name[1]);
            postedFile.SaveAs(filePath);
            FileUpload ex = new FileUpload();
            ex.fileName = time.ToString() + "." + name[1];
            ex.uploaded = 1;
            ex.url = "Http://"+ Url + "/" + UrlImage + ex.fileName;
            return Json(ex);
        }
        [HttpPost]
        public IHttpActionResult TinyUploadFiles()
        {
            string Url = HttpContext.Current.Request.Url.Authority;
            string UrlImage = "/images/GeneralImages/";
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files[0];
            string[] name = postedFile.FileName.Split('.');
            long time = (DateTime.Now.Ticks) / TimeSpan.TicksPerMillisecond;
            var filePath = HttpContext.Current.Server.MapPath("~" + UrlImage + time.ToString() + "." + name[1]);
            postedFile.SaveAs(filePath);
            TinyFile ex = new TinyFile();
            ex.fileName = time.ToString() + "." + name[1];
            //ex.uploaded = 1;
            ex.location = "Http://" + Url + "/" + UrlImage + ex.fileName;
            return Json(ex);
        }
    }
}
