import React from 'react';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationWindow from './AuthorizationWindow';
import UserAccount from './UserAccount';

function App() {

  

  //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  return (
    <BrowserRouter>
    
        <div className="App">
        
          <Routes>
            <Route path='/' element={<AuthorizationWindow />} />
            <Route path='/account' element={<UserAccount />} />
              
          </Routes>
         

        </div>
    </BrowserRouter>
     
   
  );
}

export default App;
