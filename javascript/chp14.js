// var temperature = 25;
// var isRaining = true;

// if (temperature < 30) {
//     if (isRaining) {
//         alert("It's a cold and rainy day.");
//     } else {
//         alert("It's a cold day, but it's not raining.");
//     }
// } else {
//     alert("It's a warm day.");
// }


var username = prompt("Enter Your Name");
var isLoggedIn = true;
var hasPermission = true;

if (isLoggedIn) {
    if (username  === "sufiyan" && hasPermission) {
        alert("You have access to the panel.");
    } else {
        alert("You do not have permission to access the panel.");
    }
} else {
    alert("Please log in to access the system.");
}
