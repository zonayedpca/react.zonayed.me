export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_SEARCH_RESULT':
      return action.visible;
    default:
      return state;
  }
}
