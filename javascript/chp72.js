function RollNo(Name, FatherName, Age, Class) {
    this.Name = Name,
    this.FatherName = FatherName,
    this.Age = Age,
    this.Class = Class
};

var RollNo1 = new RollNo("Sufiyan", "Saleem", 18, 13);
var RollNo2 = new RollNo("Salman", "Aijaz", 18, 13);
console.log(RollNo1);