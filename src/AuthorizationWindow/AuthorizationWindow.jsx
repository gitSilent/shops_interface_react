import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './AuthorizationWindow.module.css'

function AuthorizationWindow(){

    let navigate = useNavigate()
    console.log(navigate)

    function onSubmitEvent(event){
        event.preventDefault();
        // const history = useHistory()
        // console.log(history)
        console.log('event')
        global.contractInstance = "instance"
        console.log(global.contractInstance)

        navigate('/account')


       
    }
    return(
        <div className={classes.authorization_window}>
            <form className={classes.auth_form} onSubmit={onSubmitEvent}>
                <h2 className="h2-auth">Авторизация</h2>
                <select name="" id="" className="select-auth" >
                    <option value="">user address</option>
                </select>
                <input
                type="text"
                className="auth-login-input"
                placeholder="Enter your login"
                />
                <input
                type="text"
                className="auth-password-input"
                placeholder="Enter your password"
                />
                <button className={classes.btn_enter}>Войти</button>
            </form>
            <button className={classes.btn_reg}>Регистрация</button>
        </div>
    )
}
export default AuthorizationWindow;