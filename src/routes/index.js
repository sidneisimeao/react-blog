import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import PostPage from 'pages/PostPage';

const Routes = [{
    exact: true,
    path: "/",
    component: HomePage
},
{
    path: "/about",
    component: AboutPage
},
{
    path: "/post",
    component: PostPage
}
];

export default Routes;