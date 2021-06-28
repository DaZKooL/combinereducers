//import { createStore } from 'redux';
//import rootReducer from "./reducers/index";
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            let amount;
            amount = typeof (action.payload) === 'undefined'? amount = 1 : amount = action.payload;
            console.log (typeof (action.payload), amount)
            state.count = state.count + amount;
        }
    }

})
export const counterActions = counterSlice.actions;

const store = configureStore({ reducer: {counter: counterSlice.reducer } })
export default store;
