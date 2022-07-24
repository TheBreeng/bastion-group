import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    gostsFilter: string[];
    typesFilter: string[];
    priceFilter: {
        max: number;
        min: number;
    };
}

const initialState: FilterState = {
    gostsFilter: [],
    typesFilter: [],
    priceFilter: {
        max: 0,
        min: 0,
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectGOST(state, action: PayloadAction<string>) {
            state.gostsFilter.push(action.payload);
        },
        unSelectGOST(state, action: PayloadAction<string>) {
            state.gostsFilter.splice(
                state.gostsFilter.indexOf(action.payload),
                1
            );
        },
        selectType(state, action: PayloadAction<string>) {
            state.typesFilter.push(action.payload);
        },
        unSelectType(state, action: PayloadAction<string>) {
            state.typesFilter.splice(
                state.typesFilter.indexOf(action.payload),
                1
            );
        },
        selectPrice(state, action: PayloadAction<FilterState['priceFilter']>) {
            state.priceFilter.max = action.payload.max;
            state.priceFilter.min = action.payload.min;
        },
        unSelectPrice(state) {
            state.priceFilter.min = 0;
            state.priceFilter.max = 0;
        },
    },
});

export default filterSlice.reducer;
