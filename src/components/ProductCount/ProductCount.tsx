import React, { useState } from 'react';
import './ProductCount.scss';

import { cartSlice } from '../../store/reducers/CartSlice';
import { useAppDispatch } from '../../hooks/redux';

interface ICount {
    currentCount: number;
    id: number;
    onChangeCount?: Function;
}

const ProductCount = ({ currentCount, id, onChangeCount }: ICount) => {
    const dispatch = useAppDispatch();
    const { updateCount } = cartSlice.actions;
    const [count, setCount] = useState(currentCount);

    const increment = () => {
        setCount(count + 1);
        dispatch(updateCount({ id, count: count + 1 }));
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            dispatch(updateCount({ id, count: count - 1 }));
        }
    };

    const onChange = (value: string) => {
        if (+value) {
            setCount(+value);
            dispatch(updateCount({ id, count: +value }));
        } else if (value === '') {
            setCount(1);
            dispatch(updateCount({ id, count: 1 }));
        }
    };

    if (onChangeCount) onChangeCount(count);

    return (
        <div className="ProductCount">
            <div className="increment" onClick={increment}>
                +
            </div>
            <input
                type="text"
                value={count}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="decrement" onClick={decrement}>
                -
            </div>
        </div>
    );
};

export default ProductCount;
