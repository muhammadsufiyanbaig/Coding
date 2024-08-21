function Institute(Name, Age, Course_Name, PassingStatus, Grade){
    this.Name = Name,
    this.Age = Age,
    this.Course_Name = Course_Name,
    this.PassingStatus = PassingStatus,
    this. Grade = Grade
}
var Student1 = new Institute("Muhammad Sufiyan Baig", 18, "Machine Learning", true, "A-1");
var Student2 = new Institute("Salman", 18, "Block Chain", true, "A+");
var Student1 = new Institute("Zaeem", 18, "Development", true, "A");
var exist = "Grade" in Student2;
   var listOfProperties = [];
 for (var prop in Student2) {
 if (Student2.hasOwnProperty(prop)) {
 listOfProperties.push(prop);
 console.log(listOfProperties);
 }
 }
  console.log(exist);