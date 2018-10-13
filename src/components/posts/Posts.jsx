import React from 'react';

import PostResume from 'components/posts/PostResume';

import { Consumer } from "AppContext";

const Posts = () => (
    <Consumer>
        {({ posts }) => posts.map(post => <PostResume key={post.slug} {...post} />)}
    </Consumer>
);

export default Posts;