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

export const getFavoritePosts = () => {
  // const samplePosts = [{
  //   id: 1,
  //   title: 'রিঅ্যাক্টঃ আউলা কথা'
  // }, {
  //   id: 2,
  //   title: 'রিঅ্যাক্ট ব্যাসিক্সঃ সিরিয়াস কথা'
  // }, {
  //   id: 3,
  //   title: 'রিঅ্যাক্ট অপ্টিমাইজেশনঃ কথার কথা'
  // }]
  // localStorage.setItem('reactZunoPosts', JSON.stringify(samplePosts));
  let posts = localStorage.getItem('reactZunoPosts');
  if(posts)
    posts = JSON.parse(posts);
  else
    posts = [];
  return {
    type: 'GET_FAV_POSTS',
    payload: posts
  }
}

export const getPost = id => {
  const data = axios(`https://with.zonayed.me/wp-json/wp/v2/posts/${id}`);
  
  return {
    type: 'GET_POST',
    payload: data
  }
}
