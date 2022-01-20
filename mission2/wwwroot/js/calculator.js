////calculator function

$("#btnSend").submit(function () {


    //assigning variables 
    var assignments = ($("#assignments").val() * .55);
    var quizzes = ($("#quizzes").val() * .1);
    var groupprojects = ($("#groupprojects").val() *.05);
    var exams = ($("#exams").val() * .2);
    var intex = ($("#intex").val() * .1);


    //calculating your total grade

    totalgrade = parseInt(assignments + quizzes + groupprojects + exams + intex).toFixed(2)

    alert("Your total grade is: " + totalgrade +"%")

    totalgrade = parseInt(totalgrade)


    //if statement to determine what grade is outputted
    if (parseInt(totalgrade) >= 94) {
        alert("Your letter grade is an A");
    }
    else if (94 > totalgrade && totalgrade >= 90) {
        alert("Your letter grade is an A-");
    }
    else if (90 > totalgrade && totalgrade >= 87) {
        alert("Your letter grade is a B+");
    }
    else if (87 > totalgrade && totalgrade >= 84) {
        alert("Your letter grade is a B");
    }
    else if (84 > totalgrade && totalgrade >= 80) {
        alert("Your letter grade is a B-");
    }
    else if (80 > totalgrade && totalgrade >= 77) {
        alert("Your letter grade is a C+");
    }
    else if (77 > totalgrade && totalgrade >= 74) {
        alert("Your letter grade is a C");
    }
    else if (74 > totalgrade && totalgrade >= 70) {
        alert("Your letter grade is a C-");
    }
    else if (70 > totalgrade && totalgrade >= 67) {
        alert("Your letter grade is a D+");
    }
    else if (67 > totalgrade >= 64) {
        alert("Your letter grade is a D");
    }
    else if (64 > totalgrade && totalgrade >= 60) {
        alert("Your letter grade is a D-");
    }
    else {
        alert("Your letter grade is an E");
    }



})


