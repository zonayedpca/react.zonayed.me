export default (state = [], action) => {
  switch (action.type) {
    case 'GET_FAV_POSTS':
      return action.payload;
    case 'SET_FAV_POST':
      console.log(action);
      break;
    case 'REMOVE_FAV_POST':
      console.log(action);
      break;
    default:
      return state;
  }
}
