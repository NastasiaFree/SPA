import {widget} from "./Card.js";

function Header(){
    const elem = document.createElement('div');
    elem.classList.add('header_component');
    elem.innerHTML = `
        <div class='logo'>
            <a href="\">
                <img src="logo.svg" alt="" width=100px>
            </a>
        </div>
        <nav class="nav">
            <ul>
            <li><a href="\">Главная</a></li>
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#abaut">О нас</a></li>
            </ul>
        </nav>
        ${widget.outerHTML}
    `
    // elem.append(widget)

    this.init = () => {
        return elem;
    }
}

export default new Header().init()