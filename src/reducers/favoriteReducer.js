export default (state = [], action) => {
  switch (action.type) {
    case 'GET_FAV_POSTS':
      return action.payload;
    case 'SET_FAV_POST':
      return action.payload;
    case 'UNSET_FAV_POST':
      return action.payload;
    default:
      return state;
  }
}
