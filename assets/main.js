const menuItems = document.querySelectorAll(".menu > li");
const submenuItems = document.querySelectorAll(".submenu > li");

menuItems.forEach(menuItem => {
    const submenu = menuItem.querySelector("ul");
    menuItem.addEventListener("click", () => {
        submenu.classList.toggle("open")
    })
});

submenuItems.forEach(subMenuItem => {
    subMenuItem.addEventListener('click', event => {
        event.stopPropagation();
        const trimmedText = event.target.textContent.trim();
        alert(trimmedText)
    })
});