import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <section className="contact-us">
                <form>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Ваш телефон" />
                    <div>
                        <button className="big-btn">Заказать звонок</button>
                        <span>
                            Нажимая эту кнопку вы соглашаетесь <br />{' '}
                            <a href="">с политикой конфиденциальности</a>
                        </span>
                    </div>
                </form>
            </section>

            <div></div>
        </div>
    );
};

export default Footer;
