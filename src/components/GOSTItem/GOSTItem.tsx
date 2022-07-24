import React, { useState } from 'react';
import './GOSTItem.scss';
import { filterSlice } from '../../store/reducers/FilterSlice';
import { useAppDispatch } from '../../hooks/redux';

const GOSTItem = ({ gost }: any) => {
    const [active, setActive] = useState(false);

    const { selectGOST, unSelectGOST } = filterSlice.actions;
    const dispatch = useAppDispatch();

    const isSelected = () => {
        if (active) {
            setActive(false);

            dispatch(unSelectGOST(gost));
        } else {
            setActive(true);

            dispatch(selectGOST(gost));
        }
    };

    return (
        <div
            className={active ? 'GOSTItem gost-selected' : 'GOSTItem'}
            onClick={isSelected}
        >
            {gost}
        </div>
    );
};

export default GOSTItem;
