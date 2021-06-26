import { createStore } from 'redux';
import reducer from './reducers/index'
//import counter from './reducers/counter' // this alone works
//import messager from './reducers/messager' // this alone  works

//const store = createStore(counter);
//const store = createStore(messager);
const store = createStore(reducer);

export default store;