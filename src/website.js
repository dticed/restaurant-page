import loadHome from "./home";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liContact = document.createElement('li');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav')
    homeButton.textContent = 'Home';
    liHome.appendChild(homeButton);
    ul.appendChild(liHome)
    
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = "Menu";
    liMenu.appendChild(menuButton);
    ul.appendChild(liMenu);

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    liContact.appendChild(contactButton);
    ul.appendChild(liContact);

    nav.appendChild(ul);

    return nav;
}

function createMain() {
    const main = document.createElement("main");

    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {

}

function createWebSite() {
    const content = document.getElementById('content');
    content.classList.add('content')

    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();
}

export default createWebSite;