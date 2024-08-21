function Names() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    return true;
    }
    }
    alert("Kindly Choose Your Name.");
    return false;
    }
    