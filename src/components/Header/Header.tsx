import React from 'react';
import './Header.scss';

import phone from '../../img/icons/phone.svg';
import map from '../../img/icons/local-two.svg';
import mail from '../../img/icons/mail.svg';
import arrow2 from '../../img/icons/arrow2.svg';
import logo from '../../img/header__logo.png';
import catalog from '../../img/icons/catalog.svg';
import search from '../../img/icons/search.svg';
import arrow from '../../img/icons/arrow.svg';
import star from '../../img/icons/star.svg';
import cart from '../../img/icons/cart.svg';

import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
    const { cartItems } = useAppSelector((state) => state.cartReducer);

    return (
        <div className="Header">
            <section className="nav">
                <div className="nav__links">
                    <NavLink to="/addproducttype">Типы продуктов</NavLink>
                    <NavLink to="/addproduct">Продукты</NavLink>
                </div>
                <div className="nav__contacts">
                    <div className="phone">
                        <img src={phone} alt="phone" />
                        <span>+7 (499) 380-78-90</span>
                    </div>
                    <div className="map">
                        <img src={map} alt="map" />
                        <span>Москва</span>
                        <img src={arrow2} alt="arrow" />
                    </div>
                    <div className="mail">
                        <img src={mail} alt="mail" />
                        <span>info@bastion.pro</span>
                    </div>
                </div>
            </section>

            <section className="tools-bar">
                <div className="tools-bar__item-wrapper">
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                    <span>
                        Производитель <br /> металлических <br /> изделий №1
                    </span>
                </div>
                <div className="tools-bar__item-wrapper">
                    <button className="big-btn">
                        <img src={catalog} alt="catalog" /> Каталог
                    </button>
                    <div className="search">
                        <label htmlFor="search">
                            <img src={search} alt="search" />
                        </label>
                        <input
                            type="text"
                            placeholder="Поиск по названию..."
                            id="search"
                        />
                        <button>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
                <div className="tools-bar__item-wrapper">
                    <button className="btn">
                        <img src={star} alt="star" />
                        <span>Избранное</span>
                    </button>

                    <NavLink to="/cart">
                        <button className="btn cart-btn">
                            <img src={cart} alt="cart" />
                            <span>Корзина</span>
                            {cartItems.length > 0 && (
                                <div className="productsCount">
                                    {cartItems.length}
                                </div>
                            )}
                        </button>
                    </NavLink>
                </div>
            </section>

            <Breadcrumbs />
        </div>
    );
};

export default Header;
