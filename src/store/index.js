//import { createStore } from 'redux';
//import rootReducer from "./reducers/index";
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        }
    }

})
export const counterActions = counterSlice.actions;

const store =configureStore({ reducer:  counterSlice.reducer  })
export default store;
