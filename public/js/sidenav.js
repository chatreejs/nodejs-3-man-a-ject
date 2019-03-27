var isopen = false;
function openNav() {
    if (!isopen) {
        document.getElementById("mySidenav").style.width = "17rem";
        document.getElementById("mainNav").style.marginRight = "17rem";
        document.getElementById("main").style.marginRight = "17rem";
        isopen = true;
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainNav").style.marginRight = "0";
    document.getElementById("main").style.marginRight = "0";
    isopen = false;
}
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " sidenav-dropdown-open";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" sidenav-dropdown-open", "");
    }
}

function myDropFunc() {
    var x = document.getElementById("demoDrop");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " sidenav-dropdown-open";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" sidenav-dropdown-open", "");
    }
}
function myDropFunc2() {
    var x = document.getElementById("demoDrop2");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " sidenav-dropdown-open";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" sidenav-dropdown-open", "");
    }
}

function myDropFunc3() {
    var x = document.getElementById("demoDrop3");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " sidenav-dropdown-open";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" sidenav-dropdown-open", "");
    }
}