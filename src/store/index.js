import { createStore, combineReducers } from 'redux';


const initialCounterState = {
    count: 0,
}

const initialGreetingsState = {
    message : "Hello"
}


const counterReducer = (state = initialCounterState, action) => {
    if (action.type === 'increment') {
        console.log (state, action);
        return {
            count: state.count + action.amount,
        }
    }
    return state;
}

const greetingsReducer = (state = initialGreetingsState, action) => {
    if (action.type === 'greets') {
        console.log (state, action);
        return {
            message: 'Goodbye'
        }
    }
    return state;
}

const rootReducer = combineReducers({  
    count:counterReducer,
    essage:greetingsReducer  
})  

const store = createStore(rootReducer)  ; 

export default store;