// function checkForName() {
//     if (document.getElementById("NameField").value.length === 0) {
//     alert("Please enter your name");
//     return false;
//     }
// }
// function checkForName() {
//     if (document.getElementById("NameField").value.length === 0) {
//     alert("Please enter your name");
//     document.getElementById("NameField").focus();
//     return false;
//     }
//     }
    // function checkForFatherName() {
    //     if (document.getElementById("FatherNameField").value.length === 0) {
    //     alert("Please enter your father name");
    //     document.getElementById("FatherNameField").focus();
    //     return false;
    //     }
    //     }
    // function checkForAge() {
    //     if (document.getElementById("Age").value.length === 0) {
    //     alert("Please enter your Age");
    //     document.getElementById("Age").focus();
    //     return false;
    //     }
    //     }
    
function checkForName() {
    var targetField = document.getElementById("NameField");
    if (targetField.value.length === 0) {
    alert("Please enter your name");
    targetField.focus();
    targetField.style.background = "Blue";
    return false;
    }
    targetField.style.background = "white";
    }

    function checkForFatherName() {
        var targetField = document.getElementById("FatherNameField");
        if (targetField.value.length === 0) {
        alert("Please enter your father name");
        targetField.focus();
        targetField.style.background = "Blue";
        return false;
        }
        targetField.style.background = "white";
        }

        function checkForAge() {
            var targetField = document.getElementById("Age");
            if (targetField.value.length === 0) {
            alert("Please enter your Age");
            targetField.focus();
            targetField.style.background = "Blue";
            return false;
            }
            targetField.style.background = "white";
            }
            