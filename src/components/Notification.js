import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../store/index';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);

  const notificationHandler = (messageType) => {
    switch (messageType) {
      case "confirm":
        dispatch(notificationActions.confirm())

        break
      case "warn":
        dispatch(notificationActions.warn())

        break;
      case "error":
        dispatch(notificationActions.error("500"))

        break;
      default:
        break;
    }
  }


  return (
    <div>
      - {notification.status}-
      - {notification.message}-

      <button onClick={() => notificationHandler('error')}>Notify error 404</button>

    </div>
  );
}

export default Notification
