import loadHome from "./home";
import loadContact from "./contact";


function createHeader() {
    const header = document.createElement('header');
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');

    const liHome = document.createElement('li');
    const aHome = document.createElement('a');
    aHome.setAttribute('href', '#')
    aHome.textContent = "Home";
    liHome.appendChild(aHome);
    ul.appendChild(liHome);

    aHome.addEventListener('click', function() {
        loadHome();
    })

    const liMenu = document.createElement('li');
    const aMenu = document.createElement('a');
    aMenu.setAttribute('href', '#')
    aMenu.textContent = "Menu";
    liMenu.appendChild(aMenu);
    ul.appendChild(liMenu);

    const liContact = document.createElement('li');
    const aContact = document.createElement('a');
    aContact.setAttribute('href', '#')
    aContact.textContent = "Contact";
    liContact.appendChild(aContact);
    ul.appendChild(liContact);
    aContact.addEventListener('click', function() {
        loadContact();
    })

    nav.appendChild(ul);
    //nav.appendChild(createMobileMenu());

    return nav;
}

// function createMobileMenu() {
//     const divMobile = document.createElement('div');
//     divMobile.classList.add('mobile-menu')
//     const line1 = document.createElement('div');
//     const line2 = document.createElement('div');
//     const line3 = document.createElement('div');

//     divMobile.appendChild(line1);
//     divMobile.appendChild(line2);
//     divMobile.appendChild(line3);

//     return divMobile;
// }

function createMain() {
    const main = document.createElement("main");

    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    const spanFooter = document.createElement('span');

    spanFooter.textContent = "Developed by Lucas Pierre"
    footer.appendChild(spanFooter);

    return footer;
}

function createWebSite() {
    const body = document.querySelector('body');

    body.appendChild(createHeader());
    body.appendChild(createMain());
    body.appendChild(createFooter())

    loadHome();
}

export default createWebSite;