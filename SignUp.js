import React,{Component} from 'react';
import paypal from './PayPal.PNG';
class SignUp extends Component{
    
        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
render(){
    return (
        
<form style={{textAlign:"center", margin:140}}>
<h1 style={{color:"Blue"}}>Sign Up For PayPal Account</h1>
  <label style={{fontSize:20,color:"darkblue"}}>
    Name:
    <input style={{marginLeft:5}} type="text" name="name" />
  </label>
  <input style={{margin:20,color:"red",borderRadius:5}} type="submit" value="Submit" /><br></br>
  <label style={{fontSize:20,color:"darkblue"}}>
    Email:
    <input  style={{marginLeft:5}} type="text" name="email" />
  </label>
  <input style={{margin:20,color:"Red",borderRadius:5}} type="submit" value="Submit" /><br></br>
  <label style={{fontSize:20,color:"darkblue"}}>
    Phone:
    <input style={{marginLeft:5}} type="text" name="phone" />
  </label>
  <input style={{margin:20, color:"red",borderRadius:5}} type="submit" value="Submit" />
</form>
);
}
}
export default SignUp;