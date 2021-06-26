const initialState = {
    count: 0,
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, count: state.count + action.amount,
            }
        case 'DECREMENT':
            return {
                ...state, count: state.count - action.amount,
            }
        default:
            return state
    }
}
