function Abaut(){
    this.title = 'About'
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    elem.innerHTML = `
        <h1>О нас</h1>
        <h2>Миссия 24shop.by:</h2>
        <p>Сделать доступным для всех жителей Беларуси максимальный ассортимент товаров для заказа через интернет, предоставить удобный сервис подбора товара, подтвердить репутацию надёжного магазина.</p>
        <h2>Интернет-магазин 24shop это:</h2>
        <p>Быстрая доставка по Минску и всей Беларуси, возможен самовывоз.<br>
        Огромный ассортимент – более 95 000 товаров. <br>
        Множество вариантов оплат – наличный, безналичный, VISA, MasterCard, WebMoney и д.р. <br>
        Честная рассрочка – без переплат, комиссии и скрытых платежей. <br>
        Профессиональная консультация – по телефону и онлайн. <br>
        Удобно выбирать – сайт адаптирован под все устройства. <br>
        Можно доверять – магазин на рынке с 2000 года.</p>
        <h2>Наши реквизиты:</h2>
        <p>Владелец магазина: ООО «Дистанционная торговля» <br>
        Юр.адрес: 220036, Минск, пр-т Жукова, 29, пом.9-10 <br>
        Свидетельство о регистрации № 691825519 выдано 19.01.2017 г. Минским горисполкомом <br>
        Зарегистрирован в Торговом реестре 02.02.2017 г . <br>
        
        УНП 691825519</p>
        <p>Приятных покупок в интернет-магазине 24shop.by!</p>
        `
    this.init = () => {
        return elem;
    }
}

let elem = new Abaut();
let init = elem.init();
let title = elem.title;

export default init;
export {title};