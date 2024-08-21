// function validateEmail() {
//     var eEntered = document.getElementById("mail").value;
//     if (eEntered.indexOf(" ") !== -1) {
//     alert("No spaces allowed in address");
//     return false;
//     }
//     }

function validateEmail() {
    var addressIsLegal = true;
    var eEntered = document.getElementById("mail").value;
    if (eEntered.indexOf(" ") !== -1) {
    addressIsLegal = false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
    addressIsLegal= false;
    }
    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
    eEntered.indexOf(".") > eEntered.length - 3) {
    addressIsLegal = false;
    }
    if (addressIsLegal === false) {
    alert("Please correct email address");
    return false;
    }}