const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function () {
  // you  get a list of elements
  const navItems = document.querySelectorAll(".nav-items");
  // go through the list and add / remove d-sm-none if present
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("d-sm-none");
  }
});
