const menuItems = document.querySelectorAll(".menu > li");
const submenuItems = document.querySelectorAll(".submenu > li");
const closeOtherSubmenus = (index) => {
  const currentMenuItemIndex = index + 1;
  const otherMenuItems = document.querySelectorAll(
    `.menu > li:not(:nth-child(${currentMenuItemIndex}))`
  );
  otherMenuItems.forEach((otherMenuItem) => {
    otherMenuItem.querySelector(".submenu").classList.remove("open");
  });
};

menuItems.forEach((menuItem, index) => {
  const submenu = menuItem.querySelector("ul");
  menuItem.addEventListener("click", () => {
    closeOtherSubmenus(index);
    submenu.classList.toggle("open");
  });
});

submenuItems.forEach((subMenuItem) => {
  subMenuItem.addEventListener("click", (event) => {
    event.stopPropagation();
    alert(event.target.textContent.trim());
  });
});
