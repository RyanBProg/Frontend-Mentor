const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuIcon.addEventListener("click", () => {
  if (mobileMenu.style.display === "") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "";
  }
});
