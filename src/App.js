import React from 'react';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationWindow from './AuthorizationWindow';
import UserAccount from './UserAccount';
import abi from './abi'
import Web3 from 'web3';
import { useSelector, useDispatch } from 'react-redux';
import {setContractAddress, setAllUsersArray, pushRegistredUsersArray} from './store/mainSlice'
import AccountBody from './UserAccount/AccountBody';

function App() {

  const dispatch = useDispatch();
  
  let contractAddress, web3, contractInstance;    

  contractAddress = "0x16BcfE05aFF6D64F96Caa8c67A80A69758086A61";
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  console.log(web3);
  contractInstance = new web3.eth.Contract(abi, contractAddress);

  dispatch(setContractAddress(contractAddress))
  
  React.useEffect(()=>{
    let reg_users_arr = [];

    web3.eth.getAccounts()
    .then((val)=>{
      dispatch(setAllUsersArray(val));

       val.forEach((el)=>{
        contractInstance.methods.users(el).call()
        .then((val)=>{
          if(val.role){
            dispatch(pushRegistredUsersArray(el))
          }
        })
      })
      console.log(reg_users_arr)
     
    })
    
  },[])

  //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  return (
    <BrowserRouter>
    
        <div className="App">
        
          <Routes>
            <Route path='/' element={<AuthorizationWindow 
            web3={web3}
            contractInstance={contractInstance}
             />} />
             
            <Route path='/account' element={<UserAccount
            web3={web3}
            contractInstance={contractInstance}/>} />
              
          </Routes>
         

        </div>
    </BrowserRouter>
     
   
  );
}

export default App;
