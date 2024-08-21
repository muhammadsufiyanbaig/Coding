var userdish = prompt('enter the name of dish that you wanna eat');
let availabledishes  = ['biryani', 'karahi' , 'korma', 'Nehari'  ];
// var userdish = true;

for (let i = 0; i < availabledishes.length; i++) {
    if (userdish <=availabledishes) {
        userdish= true;
     alert("Please waiting until we are cook your dish")
        break;
    }
    else{
        alert("extremely sorry dish is not available");
    }

}

var asiaCupSquad = ["Babar Azam","Shadab Khan","Faheem Ashraf"]
 var numElements = asiaCupSquad.length;
 var matchFound = false;
 for (var i = 0; i < numElements; i++);
 if (cityToCheck === asiaCupSquad[i]) {
 matchFound = true;
 alert("Best Squad ");
 }
 if (matchFound === false) {
 alert("It's not on the list");
 }

