import React, {useContext, useState} from "react";
import MyInput from "../../components/UI/MyInput";
import MyButton from "../../components/UI/MyButton";
import s from "./Login.module.css";
import AuthContext from "../../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [authData, setAuthData] = useState({login: '', password: ''});

    const handleChangePass = e => {
        let inpText = e.target.value;
        setAuthData({...authData, password: inpText });
    }
    const handleChangeLogin = e => {
        let inpText = e.target.value;
        setAuthData({...authData, login: inpText });
    }
    const login = (e) => {
        e.preventDefault();

        !(authData.login.length && authData.password.length) ? alert('Enter login and password !!!') : setIsAuth(true);

        localStorage.setItem('auth', 'true');
    }

    return (
        <form className={s.login} onSubmit={login}>
            <h1>Авторизація</h1>
            <MyInput className={s.login_login} onChange={(e) => handleChangeLogin(e)} type="text" placeholder="Login" />
            <MyInput className={s.login_pass} onChange={(e) => handleChangePass(e)} type="password" placeholder="Password" />
            <MyButton className={s.login_btn}>Увійти</MyButton>
        </form>

    )
}

export default Login;