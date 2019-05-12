using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

namespace GioiThieuViecLam.Models.BusinessModels
{
    public static class HtmlToString
    {
        public static string StripHTML(this string HTMLText)
        {
            return HTMLText.Replace("\t","");
            
        }
    }
}