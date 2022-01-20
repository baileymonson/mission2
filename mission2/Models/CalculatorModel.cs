using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//my model page for my calculator


//the error message is for when they don't input a number between 1 and 100
namespace mission2.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100,
             ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int groupprojects { get; set; }
        [Required]
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int exams { get; set; }
        [Required]
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int intex { get; set; }
        [Required]
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int quizzes { get; set; }

    }
}
