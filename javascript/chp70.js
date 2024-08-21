// const iphone15 = {
//     NumberOfPieces: 20,
//     MainCamera: "48Mp",
//     Color: "Blue",
//     WaterProof: true, 
//     DataCable: "C-type"
// };
// iphone15.NumberOfPieces = 50
// alert(iphone15.NumberOfPieces);

const Sufiyan = {
    FullName: "Muhammad Sufiyan Baig",
    FatherName: "Muhammad Saleem Baig",
    DateOfBirth: "03-Sept-2005",
    HavingCNIC: false,
    Email: 'send.sufiyan@gmail.com',
}
propertyExists = "Email" in Sufiyan;
alert(propertyExists);
delete Sufiyan.Email;
alert("Email  " +Sufiyan.Email);
alert("Does he have CNIC?  "+Sufiyan.HavingCNIC);

