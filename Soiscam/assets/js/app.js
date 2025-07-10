// Variables
const header = document.querySelector(".header");
const openMenuBtn = document.querySelector(".header__open-menu");
const closeMenuBtn = document.querySelector(".header__close-menu");
const headerNavList = document.querySelector(".header__nav-list");

// Handle Fixed Menu
window.addEventListener("scroll", () => {
  const headerHeight = header.offsetHeight;
  const marginTopHeader = parseFloat(getComputedStyle(header).marginTop);
  const totalHeaderHeight = headerHeight + marginTopHeader;

  if (window.scrollY > totalHeaderHeight) {
    header.classList.add("fixed");
    document.body.classList.add("active");
  } else {
    header.classList.remove("fixed");
    document.body.classList.remove("active");
  }
});
// end Handle Fixed Menu

// Handle Show Menu
openMenuBtn.addEventListener("click", handleShowMenu);
closeMenuBtn.addEventListener("click", handleHideMenu);

function handleShowMenu() {
  headerNavList.classList.add("active");
  document.body.style.overflow = "hidden";
}

function handleHideMenu() {
  headerNavList.classList.remove("active");
  document.body.style.overflow = "auto";
}
// end Handle Show Menu
