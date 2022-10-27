import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCurrentAccountAddress} from '../../store/mainSlice'
import './AccountHeader.css'

function AccountHeader(props){
    
    function exitAccount(){
        navigate('/')
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const all_accounts = useSelector (state => state.app_data.allUsersArray)
    // const contractAddress = useSelector (state => state.app_data.contractAddress)
    // const registredUsersArray = useSelector (state => state.app_data.registredUsersArray)
    const currentAccountAddress = useSelector (state => state.app_data.currentAccountAddress)
    
    useEffect(()=>{
        
        if(!currentAccountAddress){
            navigate('/')
        }    

    },[currentAccountAddress])
    return(
        <div className="user_account">
            <h2 className="">Ваш адрес {props.userAddress}</h2>
            <h2 className="">Ваш баланс {props.userBalance} eth</h2>
            <h2 className="">Ваша роль: {props.userRole}</h2>
            <button onClick={exitAccount} className="btn_exit">Выйти</button>
        </div>
    )
}
export default AccountHeader;