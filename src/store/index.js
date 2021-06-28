//import { createStore } from 'redux';
//import rootReducer from "./reducers/index";
import {configureStore } from '@reduxjs/toolkit';
import counter from './reducers/slices/counter';


export const counterActions = counter.actions;

const store = configureStore({ reducer: {counter: counter.reducer } })
export default store;
