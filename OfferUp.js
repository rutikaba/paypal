import React,{Component} from 'react';
import paypal from './PayPal.PNG';
class OfferUp extends Component{
    render(){
        return(
<div style={{padding:40}}>
    <img src={paypal} alt="paypal"/>
    
        <h1 style={{fontSize:48,color:"red",fontWeight:"bold"}}>Book Now Through PayPal Credit Card<br></br> To Get 10% off on Your Next Booking</h1>
        <button onclick="clickHere()">
  Click Here
</button>
</div>
        );
    }
}
export default OfferUp;