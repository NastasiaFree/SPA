function Home(){
    this.title ='Home'
    const elem = document.createElement('div');
    elem.classList.add('home_component');
    elem.innerHTML = `
        <div class="home">    
            <h1>Доставка по Беларуси</h1>
            <p>Минск, Брест, Витебск, Гомель, Гродно, Могилев и еще в 106 городах и 5892 деревни.</p>
        </div>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Home();
let init = elem.init();
let title = elem.title;

export default init;
export {title};