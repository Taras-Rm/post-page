import Posts from "../pages/Posts/Posts";
import PostId from "../pages/PostId/PostId";
import About from "../pages/About/About";
import Errors from "../pages/Errors/Errors";
import Login from "../pages/Login/Login";


export const routesProtected = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostId, exact: true},
    {path: '/about', component: About, exact: false},
    {path: '/errors', component: Errors, exact: false}
]

export const routesPublic = [
    {path: '/login', component: Login, exact: true}
]