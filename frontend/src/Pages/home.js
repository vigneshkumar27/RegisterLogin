import { Link } from "react-router-dom";

import Axios from "axios";

const Home=()=>{
  const getjoke =async()=>{
      const url = "https://catfact.ninja/fact"
      await Axios.get(url).then((res)=>{
        console.log(res.data);
      })
  }
    return(
        <>
         <Link to="/register"><button>Register </button></Link>here
        <Link to="/login"><button>Login </button></Link>now

        <button id="getjoke" onClick={getjoke} type="button">Get Joke</button>
        </>
    )
}

export default  Home;