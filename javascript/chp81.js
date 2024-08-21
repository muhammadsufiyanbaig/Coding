// function checkForPopBlocker() {
//     var testPop = window.open("", "","width=100,height=100");
//     if (testPop === null) {
//     alert("Please disable your popup blocker.");
//     }
//     testPop.close();
//     }
    function checkForPopBlocker() {
        var testPop = window.open("", "","width=100,height=100");
        if (testPop === null || typeof(testPop === "undefined"))
        {
        alert("Please disable your popup blocker.");
        }
        testPop.close();
    }