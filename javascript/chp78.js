//for going backward
// history.back();
// //for going forward
// history.forward();
// //for going anywhere
// history.go(1);


function backward() {
    window.history.back();
    window.history.go(-1);
}

function forward() {
    window.history.forward();
    window.history.go(1);
}