import { useState } from "react";
 
import { Link, useNavigate } from "react-router-dom";

import Axios from 'axios';

const Register = ()=>{
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const navigate = useNavigate();
  
const submit = async ()=>{
  const url = "http://localhost:3002/register";
  try{
  await Axios.post(url,{firstname,lastname,email,password }).then((res)=>{
    if(res.status == 200 && res.data.message == "User usercreation successfullu"){
      alert("Registered Successfully");
      setTimeout(()=>{
        navigate("/login");
      },1000);
    

    }
    
  })}
  catch(error){
    console.log("Error occour");
    console.log(error.message);
    }
}

  return (
    
      <>
      <div>
        <form >
          <label htmlFor="firstname">Firstname</label><br/>
          <input id='firstname' value={firstname} onChange={e=>setfirstname(e.target.value)} type='text'/><br/>
          <label htmlFor='lastname'>Lastname</label><br/>
          <input id='lastname' value={lastname} onChange = {e=>setlastname(e.target.value)}type='text'/>
          <label htmlFor='email'>email</label>
          <input id='email' value={email} onChange={e=>setemail(e.target.value)} type='text'/>
          <label htmlFor='password'>Password</label>
          <input id='password' value={password} onChange={e=>setpassword(e.target.value)} type='text'/><br/>
          <button id='register' onClick={submit} type="button">Register now</button>
          <p>Already a user ?</p><Link to="/login">Login now</Link>
          <h2>{firstname}</h2>
        </form>
      </div>
      </>
    )
}

export default Register;