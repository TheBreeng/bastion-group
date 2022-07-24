import React, { useState, useEffect } from 'react';
import './CartItem.scss';
import trash from '../../img/icons/trash.svg';
import { useAppDispatch } from '../../hooks/redux';
import { cartSlice } from '../../store/reducers/CartSlice';
import ProductCount from '../ProductCount/ProductCount';

const CartItem = ({ props }: any) => {
    const [count, setCount] = useState(props.count);
    const { removeCartItem } = cartSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => setCount(props.count));

    return (
        <div className="CartItem">
            <div className="CartItem__content">
                {props.img ? (
                    <img src={props.img} />
                ) : (
                    <div className="noImg">Нет фото</div>
                )}
                <div className="description">
                    <div className="gost">
                        <span>{props.gost}</span>
                    </div>
                    <span className="name">{props.name}</span>
                    <span className="price">{props.price} руб.</span>
                </div>
            </div>
            <div className="CartItem__tools">
                <ProductCount currentCount={props.count} id={props.id} />
                <div className="totalPrice">
                    {(props.price * count).toFixed(1)} руб.
                </div>
                <button onClick={() => dispatch(removeCartItem(props.id))}>
                    <img src={trash} alt="delete" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
