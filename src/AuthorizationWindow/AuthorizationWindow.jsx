import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from './AuthorizationWindow.module.css'
import {setCurrentAccountAddress} from '../store/mainSlice'

function AuthorizationWindow(props){

    function enterAccount(event){
        event.preventDefault();
        props.contractInstance.methods.users(loginInputValue).call()
        .then((val)=>{
            console.log(val.password)
            console.log(passwordInputValue)
            if(val.password === passwordInputValue){
                dispatch(setCurrentAccountAddress(loginInputValue))
                navigate('/account')
            } else{
                alert("Неправильный логин или пароль")
            }
        })
    }

    const all_accounts = useSelector (state => state.app_data.allUsersArray)
    const contractAddress = useSelector (state => state.app_data.contractAddress)
    const registredUsersArray = useSelector (state => state.app_data.registredUsersArray)

    const [loginInputValue, setLogin] = React.useState();
    const [passwordInputValue, setPassword] = React.useState();

    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(setCurrentAccountAddress(""))
    },[])


    return(
        <div className={classes.authorization_window}>
            <form className={classes.auth_form} onSubmit={enterAccount}>
                <h2 className="h2-auth">Авторизация</h2>
                <select name="" id="" defaultValue="" className="select-auth" onChange={(event)=>{
                    let selected_option = event.target.closest("select").value;
                    setLogin(selected_option);
                }}>
                    <option disabled >Выберите пользователя</option>
                     
                     {
                        
                        registredUsersArray.map((el)=>(
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
                value={passwordInputValue}
                onInput={(event)=>{setPassword(event.target.value)}}
                />
                <button className={classes.btn_enter}>Войти</button>
            </form>
            <button className={classes.btn_reg}>Регистрация</button>
        </div>
    )
}
export default AuthorizationWindow;