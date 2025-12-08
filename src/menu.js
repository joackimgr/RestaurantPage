export default function loadMenu() {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    const title = document.createElement("div");
    title.classList.add("menuTitle");
    h1.textContent = "Our Menu";
    const item1 = createMenuItem("Cheese Burger", "10$");
    const item2 = createMenuItem("Pasta", "12$");
    const item3 = createMenuItem("Souvlaki", "5$");
    title.appendChild(h1);
    content.appendChild(title);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
}

function createMenuItem (name, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    const title = document.createElement("p");
    title.textContent = name;
    const value = document.createElement("p");
    value.textContent = price;
    menuItem.appendChild(title);
    menuItem.appendChild(value);
    return menuItem;
}