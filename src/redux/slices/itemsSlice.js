import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../actions/itemsActions';

const initialState = {
    loading: false,
    data: [],
    error: false,
  };

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.userData = {}
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload || action.error?.message || 'An error occurred';
        });
    },
})

export const {  } = itemsSlice.actions
export default itemsSlice.reducer
