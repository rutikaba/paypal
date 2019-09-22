import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from  "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import OfferUp from "./OfferUp";
import SignUp from "./SignUp";
import PayPal from "./PayPal.PNG";
class App extends Component{
render(){
  return(
    <HashRouter>
      <div>
        <h1>PayPal</h1>
        
        <ul className="Header">
          <li><NavLink to="/"><img style={{width:20,height:20}}src={PayPal} alt="PayPal"/></NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="/OfferUp">OfferUp</NavLink></li>
          <li><NavLink to="/SignUp">SignUp</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component ={Home}/>
          <Route path ="/Contact" component={Contact}/>
          <Route path ="/OfferUp" component={OfferUp}/>
          <Route path="/SignUp" component ={SignUp}/>
          
        </div>
        
      </div>
    </HashRouter>
  )
}
}

export default App;
