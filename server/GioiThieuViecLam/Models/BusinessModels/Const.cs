using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.BusinessModels
{
    public static class Const
    {
        public enum AWStatus
        {
            Sent,
            Seen,
            AcceptSentEmail,
            AcceptContactLater,
            Reject,
            Remove
        }

    }
}