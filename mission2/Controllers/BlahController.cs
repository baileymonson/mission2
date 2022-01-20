using Microsoft.AspNetCore.Mvc;
using mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


//Controllers 
namespace mission2.controllers
{
    
    public class BlahController : Controller
    {
        //used to return the main view for the index home page
        public IActionResult Index()
        {
            return View();
        }

        //Controller action to return the view of the calculator page

        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }

        //caclulator calculations model
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();


        }
    }
}
