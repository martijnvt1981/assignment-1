const menuItems = document.querySelectorAll(".menu > li")
const submenuItems = document.querySelectorAll(".menu > li > ul > li");

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const submenu = menuItem.querySelector("ul");
        submenu.classList.toggle('open')
    })
})
submenuItems.forEach(subMenuItem => {
    subMenuItem.addEventListener('click', (event) => {
        event.stopPropagation();
        const trimmedText = event.target.textContent.trim();
        alert(trimmedText)
    })
})