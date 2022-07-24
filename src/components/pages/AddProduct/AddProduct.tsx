import React, { useState } from 'react';
import './AddProduct.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { productSlice } from '../../../store/reducers/ProductSlice';

const AddProduct = () => {
    const { addProduct } = productSlice.actions;
    const dispatch = useAppDispatch();

    const { types, gosts, products } = useAppSelector(
        (state) => state.productReducer
    );

    const [product, setProduct] = useState({
        type: '',
        id: '',
        name: '',
        gost: '',
        price: '',
    });

    const newProduct = (e: React.MouseEvent) => {
        e.preventDefault();

        if (products.every((prod) => prod.id !== +product.id)) {
            dispatch(
                addProduct({
                    ...product,
                    id: +product.id,
                    name: product.name.trim(),
                    price: +product.price,
                })
            );

            setProduct({ ...product, id: '', name: '', price: '' });
        }
    };

    return (
        <div className="AddProduct wrapper">
            <form>
                <select
                    onChange={(e) =>
                        setProduct({ ...product, type: e.target.value })
                    }
                >
                    <option selected disabled>
                        Выберите тип
                    </option>
                    {types.length > 0 &&
                        types.map((type, i) => (
                            <option value={type.type} key={i}>
                                {type.type}
                            </option>
                        ))}
                </select>

                <input
                    onChange={(e) =>
                        setProduct({ ...product, id: e.target.value })
                    }
                    value={product.id}
                    type="text"
                    placeholder="Числовой идентификатор"
                />
                <input
                    onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                    }
                    value={product.name}
                    type="text"
                    placeholder="Название продукта"
                />
                <select
                    onChange={(e) =>
                        setProduct({ ...product, gost: e.target.value })
                    }
                >
                    <option selected disabled>
                        Выберите ГОСТ
                    </option>
                    {gosts.length > 0 &&
                        gosts.map((gost, i) => (
                            <option value={gost} key={i}>
                                {gost}
                            </option>
                        ))}
                </select>
                <input
                    onChange={(e) =>
                        setProduct({ ...product, price: e.target.value })
                    }
                    value={product.price}
                    type="text"
                    placeholder="Цена"
                />
                <button
                    className="big-btn"
                    onClick={(e) => newProduct(e)}
                    disabled={
                        !product.type ||
                        !+product.id ||
                        !product.name.trim() ||
                        !product.gost ||
                        !+product.price
                    }
                >
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
