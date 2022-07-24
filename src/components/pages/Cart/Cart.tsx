import React, { useState } from 'react';
import './Cart.scss';
import CartItem from '../../CartItem/CartItem';
import trash from '../../../img/icons/trash.svg';
import cart from '../../../img/icons/cart2.svg';
import file from '../../../img/icons/file.svg';
import alertImg from '../../../img/icons/alert.svg';
import user from '../../../img/icons/user.svg';
import userPhone from '../../../img/icons/userPhone.svg';
import mail from '../../../img/icons/@.svg';
import briefcase from '../../../img/icons/briefcase.svg';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { cartSlice } from '../../../store/reducers/CartSlice';
import { IUser } from '../../../store/reducers/CartSlice';
import { isEmptyFields } from '../../../utils/functions';

const Cart = () => {
    const [userData, setUserData] = useState({
        fullname: '',
        phone: '',
        mail: '',
        org: '',
    });

    const { cartItems } = useAppSelector((state) => state.cartReducer);
    const { clearCart, addUserData } = cartSlice.actions;
    const dispatch = useAppDispatch();

    const alert: string =
        'Извините, но указанное ранее количество товара недоступно. Установлено ближайшее доступное значение.';

    type UserKeys = keyof IUser;

    const onChange = (value: string, key: UserKeys) => {
        setUserData({ ...userData, [key]: value });
    };

    const checkout = (e: React.MouseEvent) => {
        e.preventDefault();

        dispatch(addUserData(userData));
        setUserData({ fullname: '', phone: '', mail: '', org: '' });

        console.log(userData, cartItems, `Сумма заказа: ${priceSum}`);
    };

    let priceSum: number = 0;
    cartItems.forEach((item) => {
        priceSum += item.count * item.price;
    });

    return (
        <div className="Cart">
            <h1>Корзина</h1>
            <div className="Cart__wrapper">
                <div className="CartItems-wrapper">
                    <div className="alert">
                        {alert && <img src={alertImg} alt="alert" />}
                        {alert}
                    </div>
                    <div>
                        {cartItems.length ? (
                            cartItems.map((item) => (
                                <CartItem props={item} key={item.id} />
                            ))
                        ) : (
                            <h1>Корзина пуста</h1>
                        )}
                    </div>
                    {cartItems.length != 0 && (
                        <div className="clearCart">
                            <button onClick={() => dispatch(clearCart())}>
                                <img src={trash} alt="delete" /> Очистить
                                корзину
                            </button>
                        </div>
                    )}
                </div>
                <div className="order-info">
                    <div className="order-info__tittle">Заказ</div>
                    <form>
                        <div>Контактная информация</div>
                        <label>
                            <img src={user} alt="user" />
                            <input
                                type="text"
                                placeholder="ФИО"
                                value={userData.fullname}
                                onChange={(e) =>
                                    onChange(e.target.value, 'fullname')
                                }
                            />
                        </label>
                        <label>
                            <img src={userPhone} alt="phone" />
                            <input
                                type="tel"
                                placeholder="Контактный телефон"
                                value={userData.phone}
                                onChange={(e) =>
                                    onChange(e.target.value, 'phone')
                                }
                            />
                        </label>
                        <label>
                            <img src={mail} alt="mail" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={userData.mail}
                                onChange={(e) =>
                                    onChange(e.target.value, 'mail')
                                }
                            />
                        </label>

                        <label>
                            <img src={briefcase} alt="briefcase" />
                            <input
                                type="text"
                                placeholder="Организация / ИНН"
                                value={userData.org}
                                onChange={(e) =>
                                    onChange(e.target.value, 'org')
                                }
                            />
                        </label>

                        <div className="price-sum">
                            Итого <span>{priceSum.toFixed(1)} руб.</span>
                        </div>
                        <button
                            className="big-btn"
                            onClick={(e) => checkout(e)}
                            disabled={
                                isEmptyFields(userData) && cartItems.length
                                    ? false
                                    : true
                            }
                        >
                            <img src={cart} alt="cart" /> Оформить заказ
                        </button>
                        <button className="big-btn offer-btn">
                            <img src={file} alt="file" />
                            Коммерческое предложение
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;
function fullname(value: string, fullname: any): void {
    throw new Error('Function not implemented.');
}
function phone(arg0: number, phone: any): void {
    throw new Error('Function not implemented.');
}

function org(value: string, org: any): void {
    throw new Error('Function not implemented.');
}
