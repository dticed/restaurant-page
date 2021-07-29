function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')
    menu.appendChild(createImg());
    menu.appendChild(createImg());
    menu.appendChild(createImg());
    menu.appendChild(createImg());
    return menu;
}

function createImg() {
    const item = document.createElement('img');
    item.classList.add('teste')
    item.src = "../dist/img/pizza1.jpg"
    item.alt = "pizza"

    return item;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;