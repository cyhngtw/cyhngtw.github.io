var nav = document.getElementById("nav");
nav.addEventListener("click", openNav, false);

var closeNavVar = document.getElementById("closeNav");
closeNavVar.addEventListener("click", closeNav, false);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }