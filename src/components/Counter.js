import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter);
  const {message} = useSelector(state => state.messager);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 1 })
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
