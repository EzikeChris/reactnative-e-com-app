import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../constants/common';

export const getProducts = createAsyncThunk(
  'items/getProducts',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let resp = await response.json();
      if(resp?.result != 'success'){
        throw new Error('Something went wrong!');
      }
      console.log(resp);
      
      return resp.data;
    } catch (error) {
      return rejectWithValue(error?.message || 'An unexpected error occurred');
    }
  },
);
