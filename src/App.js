import React, { useEffect } from 'react';
import Orders from './Orders';
import './App.css';
import Header from "./header";
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import{auth} from"./firebase";
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const initialOptions = {
  "client-id": "AY_c_Cp6reh8Skh8ckoCObdyFKCnG6VbsB_J9P2pyrGlxaCu4BvCnx0xlesuWlyItPYA3SR4KK0XE9bV",
  currency: "USD",
  intent: "capture",
};
function App() {
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);
      if(authUser)
        {
          dispatch({
            type:'SET_USER',
            user:authUser
          })
        }
        else
        {
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
    })

 },[] )
  return (
   <Router>
    <div className="App">
    
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route exact path="/" element={<><Header/> <Home/></>} />
     <Route exact path="/payment" element={<><Header /><PayPalScriptProvider options={initialOptions}><Payment /></PayPalScriptProvider></>} />
     <Route exact path="/checkout" element={<><Header/><Checkout/></>} />
     <Route exact path="/orders" element={<><Header/><Orders/></>} />
     </Routes>
      
    
    
    </div>
    </Router>
  );
}

export default App;
