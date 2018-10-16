
import React from 'react';
import { Consumer } from "AppContext";

const withPosts = WrappedComponent => ( () =>
    <Consumer>
        {({ posts }) => <WrappedComponent posts={posts} />}
    </Consumer>
);

export default withPosts;