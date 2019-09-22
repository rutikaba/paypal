import React,{Component} from 'react';
import paypal from './PayPal.PNG';
class Contact extends Component{
render(){
    return(
<div style={{padding:60}}>
    <img style={{width:90, height:90}}src={paypal} alt="paypal"/>
<h1 style={{marginTop:70,fontSize:42}}>Contact Us</h1>
<p>Telephone Number: +1 800-123-000</p>
<p>Eamil Address:paypal@gmail.com</p>
<p>Mailing Address:111 paypal Ave, VA, 20145</p><button onclick="clickHere()">
  Click Here
</button>
<h1 style={{marginTop:70,fontSize:42}}>Online Chat</h1>
<p>Oue assitant will be with you in no time please stay connected.</p>
</div>
    );
}
}
export default Contact;