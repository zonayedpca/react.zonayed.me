class HandleLocalStorage {
  constructor() {
    this.readData = JSON.parse(localStorage.getItem('reactZunoPostsRead'));
    this.favData = JSON.parse(localStorage.getItem('reactZunoPosts'));
  }

  get getFavItems() {
    let data;
    if(this.favData)
      data = this.favData;
    else
      data = [];
    return data;
  }

  setFavoriteItem({id, title}) {
    console.log(id, title);
    const MAX_FAV_POST = 3;
    const newPost = {
      id,
      title
    }
    if(this.favData) {
      if(this.favData.length >= MAX_FAV_POST) {
        this.favData.shift();
        this.favData.push(newPost);
      } else {
        this.favData.push(newPost);
      }
    } else {
      this.favData = [newPost];
    }
    const posts = JSON.stringify(this.favData);
    localStorage.setItem('reactZunoPosts', posts);
    return this.favData;
  }
}

const handleLocalStorage = new HandleLocalStorage();

export default handleLocalStorage;
