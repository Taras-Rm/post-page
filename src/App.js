import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import AuthContext from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
        setIsLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <div className="App">
                    <Navbar className="navbar"/>
                    <AppRouter />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
