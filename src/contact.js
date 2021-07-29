function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createParagraph("You can reach me at"));
    contact.appendChild(createParagraph("lucaspierrealencar@gmail.com"));
    contact.appendChild(createParagraph("github.com/dticed"));

    return contact;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.classList.add('p')

    p.textContent = text;

    return p;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;