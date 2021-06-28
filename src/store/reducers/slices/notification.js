import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: '',
    message: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        confirm(state) {
            state.status = "ok";
            state.message = "Everything is fine";
        },
        warn(state) {
            state.status = "warning";
            state.message = "Warning!";

        },
        error(state, action) {
            state.status = "ok";
            state.message = "Error " + action.payload;

        }

    }

})

export default notificationSlice