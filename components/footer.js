function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
        <div class="footer">
        <div class='logo'>
            <a href="\">
                <img src="logo.svg" alt="" width=100px>
            </a>
            <ul class="social">
                <li><a class="inst" href="https://www.instagram.com/24shop_by/"> <img src="https://24shop.by/images/ico-instagram.png" alt=""> </a></li>
                <li><a class="odnokl" href="http://odnoklassniki.ru/group/51822773928067#ym_playback=clickmap"><img src="https://24shop.by/images/odnoklassniki.png" alt=""></a></li>
                <li><a class="yout" href="https://www.youtube.com/user/24shopby#ym_playback=clickmap"><img src="https://24shop.by/images/ico-youtube.png" alt=""></a></li>
            </ul>
        </div>
        <div class="info">
            <p>Юр.адрес: 220036, Минск, пр-т Жукова, 29, пом.9-10</p>
            <br>
            <p>УНП 691825519 Свидетельство о регистрации выдано 19.01.2017 г. Минским горисполкомом.Зарегистрирован в Торговом реестре 02.02.2017 г.</p>
            <br>
            <p>Номер и адрес электронной почты лица, уполномоченного рассматривать обращения покупателей о нарушении их прав, предусмотренных законодательством о защите прав потребителей: service@24shop.by, +375172212104</p>
        </div>
        <div class="cont">
            <p>Оплата осуществляется в форме наличного или безналичного расчета: ЕРИП, WebMoney</p>
            <br>
            <p>Режим работы: с 8.00 - 21.00
                Способы доставки товара: курьером</p>
            <br>
            <p>Номер телефона работников местных исполнительных и распорядительных органов по месту государственной регистрации ООО "Дистанционная торговля", уполномоченных рассматривать обращения покупателей: Минский городской исполнительный комитет, главное управление торговли и услуг: +375 17 2180175</p>
        </div>
        </div>
    `
    this.init = () => {
        return elem;
    }
}

export default new Footer().init()