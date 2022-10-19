import React from "react";
import { useNavigate } from "react-router-dom";

function UserAccount(){
    let navigate = useNavigate();

    function exitAccount(){
        navigate('/')

    }
    return(
        <div className="user_account">
            <h2 className="">User address</h2>
            <h2 className="">User balance</h2>
            <button onClick={exitAccount}>Выйти</button>
        </div>
    )
}
export default UserAccount;