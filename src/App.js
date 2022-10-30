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

  contractAddress = "0xFE194952c05b982cA9d9B57B32C6744655a3A4c0";
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);
  contractInstance = new web3.eth.Contract(abi, contractAddress);

  function unlockAccounts(){
    web3.eth.personal.unlockAccount("0x66B667951A9AB362dfdcB7521912eD2b34fE8c02", "1234", 0)
    web3.eth.personal.unlockAccount("0x859A98018Ab085707a207968E618060B5F479Bc8", "1234", 0)
    web3.eth.personal.unlockAccount("0xc691Cf57258CcA6CFC3863f011802034c58dC660", "1234", 0)
    web3.eth.personal.unlockAccount("0x5891d4fb3a23DC213BA7B38d0420Be66448e8658", "1234", 0)
    web3.eth.personal.unlockAccount("0xAaD48Ed4104D89Cd5C77a01A0912A6BF9B3Ba775", "1234", 0)
    web3.eth.personal.unlockAccount("0xE96Be8b02Ed442a50dC4B44Eed9a2CC64de740A3", "1234", 0)
  }

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

    unlockAccounts()
    
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
