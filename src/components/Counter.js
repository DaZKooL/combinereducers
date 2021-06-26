import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const message = useSelector(state => state.message);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 3 })
  }

  const greetingsHandler = () => {
    dispatch({ type: 'GREETS', message: 'Goodbye' })
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