import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCurrentAccountAddress} from '../store/mainSlice'
import AccountBody from "./AccountBody";
import AccountHeader from "./AccountHeader";

function UserAccount({web3, contractInstance}){
    
    const [address, setAddress] = useState() 
    const [balance, setBalance] = useState() 
    const [role, setRole] = useState() 
    const [user, setUser] = useState() 
   
    const currentAccountAddress = useSelector (state => state.app_data.currentAccountAddress)
    
    useEffect(()=>{
        setAddress(currentAccountAddress)

        web3.eth.getBalance(currentAccountAddress)
        .then((val)=>{
            setBalance(web3.utils.fromWei(val, "ether"))
        })
        contractInstance.methods.users(currentAccountAddress).call()
        .then((val)=>{
            setUser(val);
            if(val.sub_role != ""){
                console.log("1 if")
                setRole(val.sub_role)
            }else{
                console.log("2 if")
                setRole(val.role)
            }
        })

    },[currentAccountAddress, user])
    return(
        <div>

            <AccountHeader web3={web3} contractInstance={contractInstance} userAddress={address} userBalance={balance} userRole={role}/>
            <AccountBody web3={web3} contractInstance={contractInstance} userAddress={address} userBalance={balance} userRole={role} user={user} setUser={setUser}/>
        </div>
    )
}
export default UserAccount;