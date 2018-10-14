import React from 'react'

import { Consumer } from "AppContext";


export default ({ match }) => (
  <Consumer>
    {({ posts }) => {
      const post = posts.filter(( post ) => post.slug === match.params.slug )
      console.log(post);
      //posts.filter(post => <PostResume key={post.slug} {...post} />)
    }
    }
  </Consumer>
);
