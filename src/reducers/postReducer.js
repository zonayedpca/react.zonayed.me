export default (state = null, action) => {
  switch (action.type) {
    case 'GET_POST':
      return action.payload.data;
    default:
      return state;
  }
}
