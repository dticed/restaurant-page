import './style.css';
import Icon from './icon.jpg'

const home = function() {
    const element = document.createElement('div');

    element.innerHTML = "Teste";
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}


document.body.appendChild(home());