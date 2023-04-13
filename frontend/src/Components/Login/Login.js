import { useState } from "react";


import Axios from "axios";
import {Link,useNavigate} from "react-router-dom";
const Login = ()=>{

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("");

    const navigate = useNavigate();

    const handlelogin =async ()=>{
        console.log("RE");
        console.log(email+password);
        const url = "http://localhost:3002/login"
        try{
            await Axios.post(url,{email,password}).then((res)=>{
                if(res.status == 200 && res.data.message == "Logged in"){
                     navigate("/loggedin");
                    console.log('Logged in');
                }
                else if (res.status == 200 && res.data=="Incorrect Credentials"){
                           document.getElementById('invalidcredentials').innerHTML="Invalid Credentials";
                           console.log("Invalid credentials");
                           
                }
            })
        }
        catch(error){
             console.log(error);
        }
    }

    return (
              
                <div className="container">
                <form >  
  <div className="form-outline mb-2">
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}/>
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
    <label className="form-label" htmlFor="form2Example2">Password</label>
    <h3 id="invalidcredentials"></h3>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
     
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
    
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handlelogin}>Sign in</button>


  <div className="text-center">
    <p>Not a member? <Link to="/register">Register</Link></p>
    <p>or sign up with:</p>

  </div>
</form>
</div>
    )
}

export default Login;