import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import PostPage from 'pages/PostPage';
import BlogPage from 'pages/BlogPage';

const Routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/blog",
        component: BlogPage,
        routes: [
            {
                path: "/blog/post/:id",
                component: PostPage
            }
        ]
    }
];

export default Routes;