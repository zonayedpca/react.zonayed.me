import axios from 'axios';

import handleLocalStorage from '../utils/handleLocalStorage';

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

export const getReadPost = () => {
  const readPost = JSON.parse(localStorage.getItem('reactZunoPostsRead'));
  const data = readPost ? readPost : [];
  return {
    type: 'GET_READ_POST',
    payload: data
  }
}

export const setReadPost = id => {
  let readPost = JSON.parse(localStorage.getItem('reactZunoPostsRead'));
  let data;
  if(readPost) {
    readPost.push(id);
  } else {
    readPost = [id];
  }
  data = readPost;
  readPost = JSON.stringify(readPost);
  localStorage.setItem('reactZunoPostsRead', readPost);
  return {
    type: 'SET_READ_POST',
    payload: data
  }
}

export const unsetReadPost = id => {
  let readPost = JSON.parse(localStorage.getItem('reactZunoPostsRead'));
  let data;
  readPost.push(id);
  readPost = readPost.filter(one=>one!==id);
  data = readPost;
  readPost = JSON.stringify(readPost);
  localStorage.setItem('reactZunoPostsRead', readPost);
  return {
    type: 'UNSET_READ_POST',
    payload: data
  }
}

export const getFavoritePosts = () => {
  // let posts = localStorage.getItem('reactZunoPosts');
  // if(posts)
  //   posts = JSON.parse(posts);
  // else
  //   posts = [];
  // console.log(posts, handleLocalStorage.getItems);
  return {
    type: 'GET_FAV_POSTS',
    payload: handleLocalStorage.getFavItems
  }
}

export const setFavoritePost = ({id, title}) => {
  const MAX_FAV_POST = 3;
  const newPost = {
    id,
    title
  }
  let items = JSON.parse(localStorage.getItem('reactZunoPosts'));
  if(items) {
    if(items.length >= MAX_FAV_POST) {
      items.shift();
      items.push(newPost);
    } else {
      items.push(newPost);
    }
  } else {
    items = [newPost];
  }
  const posts = JSON.stringify(items);
  localStorage.setItem('reactZunoPosts', posts);
  // const data = handleLocalStorage.setFavoriteItem({id, title});
  // console.log(data);
  return {
    type: 'SET_FAV_POST',
    payload: items
  }
}

export const unsetFavoritePost = (id) => {
  let items = JSON.parse(localStorage.getItem('reactZunoPosts'));
  items = items.filter(item => item.id !== id);
  const posts = JSON.stringify(items);
  localStorage.setItem('reactZunoPosts', posts);
  return {
    type: 'UNSET_FAV_POST',
    payload: items
  }
}

export const getPost = id => {
  const data = axios(`https://with.zonayed.me/wp-json/wp/v2/posts/${id}`);

  return {
    type: 'GET_POST',
    payload: data
  }
}
