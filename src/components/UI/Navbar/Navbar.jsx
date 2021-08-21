import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import MyButton from "../MyButton";
import AuthContext from "../../../context";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={s.navbar}>
            <div className={s.navbar_links}>
                <NavLink className={s.navbar_item} activeClassName={s.active_nav_item} to='/about'>About</NavLink>
                <NavLink className={s.navbar_item} activeClassName={s.active_nav_item} to='/posts'>Posts</NavLink>
            </div>
            <MyButton onClick={logout}>Вийти</MyButton>
        </div>
    );
}

export default Navbar;