import { getAuth } from "firebase/auth";
import app from "../firebase/Firebase.init";
import './App.css';
 
const auth = getAuth(app);
const handleSubmit =(e)=>{
  /* 
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email,password)
  */
  e.preventDefault();
  console.log(e.target.email.value,e.target.password.value)

}
const handleEmailChange = e=>{
        console.log(e.target.value)
}
const handlePasswordBlur=(e)=>{
  console.log (e.target.value)
}

const Register = () => {
    return (
        <div>
            <form onSubmit={handleSubmit} >
        <input onBlur={handleEmailChange} type="email" name="email" id="" placeholder="Enter  Your Email " />
        <br/>
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder="Enter your password"/>
        <br/>
        <button type="submit">Register</button>
      </form>
            
        </div>
    );
};

export default Register;