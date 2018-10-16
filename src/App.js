import React, { Component } from 'react';

import PrimaryLayout from "layouts/PrimaryLayout";
import { Provider } from "AppContext";

import "styles/scss/app.scss";

class App extends Component {

    state = {
      posts:[]
    };

    async componentWillMount() {
     
      const storage = {
        posts:[]
      };

      storage.posts =localStorage.getItem('posts');

      if(!!storage.posts){
        storage.posts = JSON.parse(storage.posts);
      }else{
         const { posts } = await import('posts.json');
         localStorage.setItem('posts', JSON.stringify(posts));
         storage.posts = posts;
      }
      this.setState(storage);
    }

    render(){        
      return (
        <Provider value={ this.state }>
              <PrimaryLayout />
        </Provider>
     )
    }
}

export default App;

//https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2
