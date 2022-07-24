import React, { useState } from 'react';
import './AddProductType.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { productSlice } from '../../../store/reducers/ProductSlice';

const AddProductType = () => {
    const { addType, addGOST } = productSlice.actions;
    const { gosts, types } = useAppSelector((state) => state.productReducer);
    const dispatch = useAppDispatch();

    const [id, setId] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [gost, setGOST] = useState<string>('');

    const newType = (e: React.MouseEvent) => {
        e.preventDefault();

        let typesArr: string[] = [];
        let idsArr: number[] = [];

        types.forEach(({ type, id }) => {
            typesArr.push(type);
            idsArr.push(id);
        });

        if (
            typesArr.indexOf(type.trim()) === -1 &&
            idsArr.indexOf(+id) === -1
        ) {
            dispatch(addType({ type: type.trim(), id: +id }));
            setId('');
            setType('');
        }
    };

    const newGOST = (e: React.MouseEvent) => {
        e.preventDefault();

        if (gosts.indexOf(gost.trim()) === -1) {
            dispatch(addGOST(gost.trim()));
            setGOST('');
        }
    };

    return (
        <div className="AddProductType wrapper">
            <form>
                <input
                    type="text"
                    placeholder="Числовой идентификатор"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />
                <input
                    type="text"
                    placeholder="Тип продукта"
                    onChange={(e) => setType(e.target.value.toLowerCase())}
                    value={type}
                />
                <button
                    className="big-btn"
                    onClick={newType}
                    disabled={!type.trim() || !+id}
                >
                    Добавить
                </button>
            </form>
            <form>
                <input
                    type="text"
                    placeholder="ГОСТ"
                    onChange={(e) => setGOST(e.target.value.toUpperCase())}
                    value={gost}
                />
                <button
                    className="big-btn"
                    onClick={newGOST}
                    disabled={!gost.trim()}
                >
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AddProductType;
