let student_name = prompt("Enter Student name:-");
let telugu_marks = Number(prompt("Enter Telugu marks:-"));
let english_marks = Number(prompt("Enter English marks:-"));
let maths_marks = Number(prompt("Enter Maths marks:-"));

total_marks = telugu_marks + english_marks + maths_marks;
average_marks = total_marks / 3;

if (average_marks >= 90){
    alert("Student name:- " + student_name +
    "\nTotal marks:- " + total_marks +
    "\nAverage marks:- " + average_marks +
    "\nGrade:- A+"
    );
    
}
else if(average_marks >= 75){
    alert("Student name:- " + student_name +
    "\nTotal marks:- " + total_marks +
    "\nAverage marks:- " + average_marks +
    "\nGrade:- A"
    );

}
else if(average_marks >= 60){
    alert("Student name:- " + student_name +
    "\nTotal marks:- " + total_marks +
    "\nAverage marks:- " + average_marks +
    "\nGrade:- B"
    );

}
else if(average_marks >= 35){
    alert("Student name:- " + student_name +
    "\nTotal marks:- " + total_marks +
    "\nAverage marks:- " + average_marks +
    "\nGrade:- C"
    );

}
else
{
    alert("Student name:- " + student_name +
    "\nTotal marks:- " + total_marks +
    "\nAverage marks:- " + average_marks +
    "\nGrade:- Fail"
    );
}