import axios from 'axios';

export const getBasicPosts = () => {
  const data = axios(`https://with.zonayed.me/wp-json/wp/v2/posts?tags=172&order=asc&per_page=30&fields=id,title`);
  return {
    type: 'GET_BASIC_POSTS',
    payload: data
  }
}

export const searchVisibility = visible => {
  return {
    type: 'SHOW_SEARCH_RESULT',
    visible
  }
}

export const getSearchResult = (data, term) => {
  return {
    type: 'GET_SEARCH_RESULT',
    term,
    data
  }
}
