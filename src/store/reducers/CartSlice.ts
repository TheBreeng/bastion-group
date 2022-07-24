import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from './ProductSlice';

interface ICart extends IProduct {
    count: number;
}

export interface IUser {
    fullname: string;
    phone: string;
    mail: string;
    org: string;
}

interface CartState {
    user: IUser;
    cartItems: ICart[];
}

const initialState: CartState = {
    user: { fullname: '', phone: '', mail: '', org: '' },
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ICart>) {
            if (
                !state.cartItems.some((item) => item.id === action.payload.id)
            ) {
                state.cartItems.push(action.payload);
            } else {
                state.cartItems.forEach((item) => {
                    if (item.id === action.payload.id)
                        item.count = action.payload.count;
                });
            }
        },
        clearCart(state) {
            state.cartItems = [];
        },
        removeCartItem(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        addUserData(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        updateCount(
            state,
            action: PayloadAction<{ id: number; count: number }>
        ) {
            state.cartItems.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.count = action.payload.count;
                }
            });
        },
    },
});

export default cartSlice.reducer;
