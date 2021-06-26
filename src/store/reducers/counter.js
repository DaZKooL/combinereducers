const initialState = {
    count: 0,
}

export default function counter(state = initialState, action) {

    switch (action.type) {

        case 'INCREMENT':
            console.log(state, action);
            return {
                count: state.count + action.amount,
            }
        case 'DECREMENT':
            return {
                count: state.count - action.amount,
            }
        default:
            return state
    }
}