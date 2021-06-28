//import { createStore } from 'redux';
//import rootReducer from "./reducers/index";
import {configureStore } from '@reduxjs/toolkit';
import counter from './reducers/slices/counter';
import notification from './reducers/slices/notification';


export const counterActions = counter.actions;
export const notificationActions = notification.actions;

const store = configureStore({ reducer: {counter: counter.reducer, notification: notification.reducer } })
export default store;
