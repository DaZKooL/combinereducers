import './App.css';
import Counter from './components/Counter';
import {useState} from 'react';

const DUMMY_COUNTERS = [129,34,55,67,56];

function App() {
const [counters, setCounters ] = useState (DUMMY_COUNTERS);
console.log (counters)
const addRandomCounterHandler = counter => {
  
  setCounters ((prevCounters) => {
    let randomCounter = Math.round(Math.random()*1000);
    return [randomCounter,...prevCounters]
  }

  )
}
  return (
    <div className="App">
      <button onClick = {addRandomCounterHandler}>Add Counter</button>
      {counters.length === 0 ? <h1>There are no counters</h1> : <h1>Counters'list:</h1>}
      {counters.length >10 && 'More than 10 counters!'}
      {counters.map((count,index) => <Counter key={count+index/count*1.3} counter={count} />)}
    </div>
  );
}

export default App;




