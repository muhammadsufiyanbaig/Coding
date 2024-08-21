var percentage = parseInt(prompt("Enter your percentage."));
var attendance = parseInt(prompt("Enter your attendance."));

if(percentage >= 70 && attendance >= 60){
    alert("Your are eligible to get admission in computer science");
}
else{
    alert("You are not eligible to get admission in computer science");
}

if(percentage >= 70 || attendance >= 60){
    alert("Your are eligible to get admission in the next semester");
}
else{
    alert("You are not eligible to get admission in the next semester");
}
