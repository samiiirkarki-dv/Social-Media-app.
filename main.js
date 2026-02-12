const settingsMenu = document.querySelector(".setting-menu");
const darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("setting-menu-height");
}
 
// Toggle Menu 
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");


  if (localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
};

// Toggle storage
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
   darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} 
else {
localStorage.setItem("theme", "light");
}



