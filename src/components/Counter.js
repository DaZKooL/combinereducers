import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  //const {message} = useSelector(state => state.messager);

  const incrementHandler = () => {
    dispatch(counterActions.increment(3))
  }


  return (
    <div>
     - {counter.count}
      <button onClick={incrementHandler}>Increment</button>

    </div>
  );
}

export default Counter
