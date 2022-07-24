import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProduct {
    type: string;
    id: number;
    name: string;
    gost: string;
    price: number;
    img?: string;
}

interface IProductType {
    id: number;
    type: string;
}

interface ProductState {
    types: IProductType[];
    gosts: string[];
    products: IProduct[];
}

const initialState: ProductState = {
    types: [
        { id: 1, type: 'труба' },
        { id: 2, type: 'опора' },
        { id: 3, type: 'муфта' },
    ],
    gosts: ['ГОСТ 14911-82', 'ОСТ 36-146-88', 'НТС 65-06'],
    products: [
        {
            type: 'муфта',
            id: 1,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 849.9,
        },
        {
            type: 'труба',
            id: 2,
            name: 'Опора корпусная приварная КП',
            gost: 'ОСТ 36-146-88',
            price: 10500.0,
        },
        {
            type: 'труба',
            id: 3,
            name: 'Опора корпусная приварная КП',
            gost: 'ОСТ 36-146-88',
            price: 849.9,
        },
        {
            type: 'муфта',
            id: 4,
            name: 'Опора корпусная приварная КП',
            gost: 'ОСТ 36-146-88',
            price: 849.9,
        },
        {
            type: 'труба',
            id: 5,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 849.9,
        },
        {
            type: 'муфта',
            id: 6,
            name: 'Опора корпусная приварная КП',
            gost: 'НТС 65-06',
            price: 1240.2,
        },
        {
            type: 'труба',
            id: 7,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 14.3,
        },
        {
            type: 'опора',
            id: 8,
            name: 'Опора корпусная приварная КП',
            gost: 'НТС 65-06',
            price: 500.9,
        },
        {
            type: 'труба',
            id: 9,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 3248.1,
        },
        {
            type: 'труба',
            id: 10,
            name: 'Опора корпусная приварная КП',
            gost: 'НТС 65-06',
            price: 849.9,
        },
        {
            type: 'опора',
            id: 11,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 650.0,
        },
        {
            type: 'труба',
            id: 12,
            name: 'Опора корпусная приварная КП',
            gost: 'ГОСТ 14911-82',
            price: 121.1,
        },
    ],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addType(state, action: PayloadAction<IProductType>) {
            state.types.push(action.payload);
        },
        addGOST(state, action: PayloadAction<string>) {
            state.gosts.push(action.payload);
        },
        addProduct(state, action: PayloadAction<IProduct>) {
            state.products.push(action.payload);
        },
    },
});

export default productSlice.reducer;
