import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './AuthorizationWindow.module.css'

function AuthorizationWindow(props){
let current_user_address;

const [loginInputValue, setLogin] = React.useState();
const [arrAccounts, setAccounts] = React.useState([]);

    let navigate = useNavigate()
    console.log(navigate)

    function enterAccount(event){
        event.preventDefault();


        navigate('/account')
    }
    console.log(props)
    
    // setAccounts(props.accounts_arr)
    React.useEffect(()=>{
        (()=>{
            console.log(props.accounts_arr)
            setAccounts(props.accounts_arr);
            console.log(arrAccounts)

        })()

        // console.log(props.accounts_arr)
    },[])

    return(
        <div className={classes.authorization_window}>
            <form className={classes.auth_form} onSubmit={enterAccount}>
                <h2 className="h2-auth">Авторизация</h2>
                <select name="" id="" className="select-auth" onChange={(event)=>{
                    let selected_option = event.target.closest("select").selectedIndex;
                    setLogin(selected_option);
                }}>
                     {
                        arrAccounts.map((el)=>(
                            <option>{el}</option>
                        ))
                    }
                   
                </select>
                <input
                type="text"
                className="auth-login-input"
                placeholder="Enter your login"
                value={loginInputValue}
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