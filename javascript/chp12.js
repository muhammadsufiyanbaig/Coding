var score = parseInt(prompt("Enter your exam score:"));
if (!isNaN(score)) {
  
if (score >= 90) {
    alert("Your grade is A");
  } 
else if (score >= 80) {
    alert("Your grade is B");
  } 
else if (score >= 70) {
    alert("Your grade is C");
  }
else if (score >= 60) {
    alert("Your grade is D");
  }
else {
    alert("Your grade is F");
  }
} else {
  alert("Please enter a valid number.");
}
