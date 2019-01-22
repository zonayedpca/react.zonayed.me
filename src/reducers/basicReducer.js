export default (state = null, action) => {
  switch (action.type) {
    case 'GET_BASIC_POSTS':
      return action.payload.data;
    default:
      return state;
  }
}
