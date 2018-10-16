import React from 'react';

import PostResume from 'components/posts/PostResume';
import withPosts from 'hocs/withPosts';

const Posts = ({ posts }) => ( posts || []).map( post => <PostResume key={post.slug} {...post} />)

export default withPosts(Posts);