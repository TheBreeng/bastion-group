import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { cartSlice } from '../../store/reducers/CartSlice';
import ProductCount from '../ProductCount/ProductCount';

import './Product.scss';
import cart from '../../img/icons/addToCart.svg';

const Product = ({ props }: any) => {
    const [count, setCount] = useState(1);

    const { addToCart } = cartSlice.actions;
    const dispatch = useAppDispatch();

    const loyalty = (letter: string) => {
        if (props.name.indexOf(letter) !== -1) {
            return true;
        }
    };

    const addProductToCart = () => {
        dispatch(addToCart({ ...props, count }));
    };

    const updateCount = (num: number) => {
        setCount(num);
    };

    return (
        <div className="Product">
            <div className="Product__wrapper">
                <div className="Product__loyalty">
                    {loyalty('о') && <div className="hit">Хит</div>}
                    {loyalty('а') && <div className="stock">Акция</div>}
                </div>
                {props.img ? (
                    <img src={props.img} />
                ) : (
                    <div className="Product__noImg">Нет фото</div>
                )}
                <div className="gost">
                    <span>{props.gost}</span>
                </div>
                <span className="Product__type">Тип: {props.type}</span>
                <span className="Product__name">{props.name}</span>
                <div className="price-count--wrapper">
                    <span className="Product__price">
                        {props.price.toFixed(1)} руб.
                    </span>

                    <ProductCount
                        currentCount={count}
                        id={props.id}
                        onChangeCount={updateCount}
                    />
                </div>

                <button className="big-btn" onClick={addProductToCart}>
                    <img src={cart} alt="add" /> В корзину
                </button>
                <button className="big-btn">Подробне</button>
            </div>
        </div>
    );
};

export default Product;
