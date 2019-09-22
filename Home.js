import React, {Component} from 'react';
import debit from "./debit.png";
import email from './email.png'
class Home extends Component{
render(){
    return(
    <div>
        <ul>
            <li><h1>Link Your Credit/Debit Card</h1>
            <p><img style={{width:40, height:40}}src={debit} alt="debit"/></p></li>
            <li><h1>Link Your Paypal Account</h1>
            <p><img style={{width:40, height:40}}src={debit} alt="debit"/></p></li>
            <li><h1>Confirm Your Email Address</h1>
            <p><img style={{width:40, height:40}}src={email} alt="debit"/></p></li>
        </ul>
        <button onclick="clickHere()">
  Click Here
</button>
        <h1>Your Account Summary</h1>
        <p>Your current balance is:$1255</p>
        <p>Your Available balance is:$350</p>
        <h1>Last Activities:</h1>
        <p>$27.78 at Amazone</p>
        <p>$50 at Walmart</p>
        <p>$42.33 at Food Lion</p>
    </div>
);
}
}
export default Home;
