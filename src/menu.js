function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')
    menu.appendChild(createImg('pizza1', 'pizza', 'Margherita/Gorgonzola'));
    menu.appendChild(createImg('pizza2', 'pizza', 'Margherita/Bacon'));
    menu.appendChild(createImg('pao1', 'sourdough bread', 'Sourdough bread'));
    menu.appendChild(createImg('pao2', 'sourdough bread', 'Sourdough bread'));
    return menu;
}

function createImg(title, alt, text) {
    const itemBox = document.createElement('div');
    const itemImage = document.createElement('img');
    itemBox.classList.add('menu-item');
    itemImage.src = `../dist/img/${title}.jpg`
    itemImage.alt = alt

    

    itemBox.append(itemImage);
    itemBox.append(createParagraph(text));

    return itemBox;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    return paragraph;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;