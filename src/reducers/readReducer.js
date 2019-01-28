export default (state = [], action) => {
  switch (action.type) {
    case 'GET_READ_POST':
      return action.payload;
    case 'SET_READ_POST':
      return action.payload;
    case 'UNSET_READ_POST':
      return action.payload;
    default:
      return state;
  }
}
