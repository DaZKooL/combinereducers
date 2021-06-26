import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const message = useSelector(state => state.message);

  const incrementHandler = () => {
    dispatch({ type: 'increment', amount: 3 })
  }

  const greetingsHandler = () => {
    dispatch({ type: 'greets', message: 'Goodbye' })
  }

  return (
    <div>
     - {count} - { message }
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={greetingsHandler}>Greet!</button>

    </div>
  );
}

export default Counter