using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ThucHanhWebBuoi2.Controllers
{
    public class HomeController : Controller
    {
   
        public ActionResult test()
        {
            ViewBag.Message = "Trang Chủ";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}