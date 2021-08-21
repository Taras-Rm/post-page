import React, {useContext, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import About from "../../pages/About/About";
import Errors from "../../pages/Errors/Errors";
import PostId from "../../pages/PostId/PostId";
import {routesProtected, routesPublic} from "../../routes";
import AuthContext from "../../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    // перевірка на авторизацію
    const {isAuth} = useContext(AuthContext);
    const {isLoading} = useContext(AuthContext);

    // перевірка на те чи програма ініціалізувалася
    if(isLoading) {
        return <Loader/>;
    }

    return (
        isAuth ?
            <Switch>
                {
                    routesProtected.map((r) => <Route component={r.component} path={r.path} exact={r.exact}/>)
                }
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {
                    routesPublic.map((r) => <Route component={r.component} path={r.path} exact={r.exact}/>)
                }
                <Redirect to='/login'/>
            </Switch>
    )
}

export default AppRouter;