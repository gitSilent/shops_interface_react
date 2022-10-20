import React from 'react';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationWindow from './AuthorizationWindow';
import UserAccount from './UserAccount';
import abi from './abi'
import Web3 from 'web3';

function App() {
  let contractAddress, web3, contractInstance;

  const [accounts_arr, setAccountsArr] = React.useState([]);
    

      contractAddress = "0x8f9BBE8FfeF5A9bE18C4981821EEe7B7811D9bd4";
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
      console.log(web3);
      contractInstance = new web3.eth.Contract(abi, contractAddress);
      
      React.useEffect(()=>{
        web3.eth.getAccounts()
        .then((val)=>{
          setAccountsArr(val)

          console.log(accounts_arr)
        })
      },[])

  //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  return (
    <BrowserRouter>
    
        <div className="App">
        
          <Routes>
            <Route path='/' element={<AuthorizationWindow 
            contractAddress={contractAddress}
            web3={web3}
            contractInstance={contractInstance}
            accounts_arr={accounts_arr}
             />} />
            <Route path='/account' element={<UserAccount />} />
              
          </Routes>
         

        </div>
    </BrowserRouter>
     
   
  );
}

export default App;
