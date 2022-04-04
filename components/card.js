function Card(){
    this.card = [];
    this.totalPrice = 0;
    this.prices = [];
    this.title = 'Card'
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    // elem.innerHTML = `
    //     <h1>В вашей корзине находятся: </h1> 
    //      <span>${this.card.length}</span>
         
    // `
    const cardItems = document.createElement('div');
    cardItems.classList.add('card_items');
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total_price');

    this.render = () => {
        cardItems.innerHTML = '';
        this.prises = [];
        this.card.forEach(data => {
            let cardItem = document.createElement('div');
            cardItem.classList.add('card_item');
            cardItem.innerHTML = `
                <div class="item_image">
                    <img src="${data.image}" alt="#">
                </div>
                <div>
                    <h2>${data.title}</h2>
                </div>
            `
            elem.innerHTML = `
        <h1>В вашей корзине находятся: <span>${this.card.length}</span> товара</h1> 
        `

            let tPrice = document.createElement('div');
            tPrice.classList.add('t_price');
            tPrice.innerText = `${data.price * (data.count ? data.count : 1)}$`;
            this.prices.push(parseFloat(tPrice.innerText));
            let label = document.createElement('label');
            label.innerText = 'Количество: '
            let counter = document.createElement('input');
            counter.setAttribute('type', 'number')
            counter.value = data.count ? data.count : 1;
            let btnDel = document.createElement('button');
            btnDel.innerText='Удалить';

            counter.addEventListener('change', () => {
                if (counter.value > 0){
                    data.count = +counter.value;
                    this.render();
                    localStorage.setItem('card', JSON.stringify(this.card));
                }else{
                    counter.value = 1;
                }
            })

            label.appendChild(counter)
            cardItem.append(tPrice,label, btnDel);
            cardItems.append(cardItem)

            // btnDel.addEventListener('click', _ => this.cardRemove(this.card))
        
        })

        console.log(this.prices);
        totalPrice.innerText = `Общая стоимость:  ${this.prices.reduce((count, item) => count + item, 0).toFixed(2)} $`;
        elem.append(cardItems, totalPrice);
        return elem;
    }

    // this.cardRemove = (title) => {
    //     this.remove(title);
    //     this.render();
    // }

    this.cardWidget = () => {
        let elem = document.createElement('div');
        elem.classList.add('card_widget');
        elem.innerHTML = `
        <a href="#card"> <img src=https://a.lmcdn.ru/static/22.03.30/img/307d4ad2de375b510f76764183b286e2.svg> </a>
            <a href="#card">Корзина:</a>
            <span>${this.card.length}</span>
        `

        return elem;
    }

    this.addCard = (obj) =>{

        if (obj) {
            obj.count = 1;
            this.card.push(obj);
        }
        let count = document.querySelector('.card_widget').lastElementChild;
        count.innerText = this.card.length;

        localStorage.setItem('card', JSON.stringify(this.card));

        let flag = this.card.some(data => data.id === obj.id);
        return flag;
    }

    this.init = () => {
        if (localStorage.getItem('card')){
            this.card = JSON.parse(localStorage.getItem('card'));
        }
        return this.render();
    }
}

let elem = new Card();
let init = elem.init();
let widget = elem.cardWidget();
let addCard = elem.addCard;
let title = elem.title

export default init;
export {widget, addCard, title}