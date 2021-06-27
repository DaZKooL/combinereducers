const initialState = {
    message: 'Hi',
}

export default function messagerReducer(state = initialState, action) {
  switch (action.type) {
    case "GREETS":
      console.log(state, action);

      return {
        message: "Goodbye",
      };
    default:
      return state;
  }
}
