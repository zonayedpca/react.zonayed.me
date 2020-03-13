export default (state = null, action) => {
  switch (action.type) {
    case "GET_SEARCH_RESULT":
      if (action.data) {
        return action.data
          .filter((item, index) =>
            item.title.toLowerCase().includes(action.term.trim().toLowerCase())
          )
          .slice(0, 3);
      }
      return state;
    default:
      return state;
  }
};
