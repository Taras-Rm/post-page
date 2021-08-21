import React, {useContext} from "react";
import MyInput from "../../components/UI/MyInput";
import MyButton from "../../components/UI/MyButton";
import s from "./Login.module.css";
import AuthContext from "../../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true');
    }

    return (
        <form className={s.login} onSubmit={login}>
            <h1>Авторизація</h1>
            <MyInput className={s.login_login} type="text" placeholder="Login"/>
            <MyInput className={s.login_pass} type="password" placeholder="Password"/>
            <MyButton className={s.login_btn}>Увійти</MyButton>
        </form>

    )
}

export default Login;