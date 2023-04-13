import Navbar from "./Components/Navbar/Navabar";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Pages/home";
import Loggedin from "./Components/Loggedin/Loggedin.jsx";

const App = ()=>{
      return ( 
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/loggedin" element={<Loggedin/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>

          </>
    )
}


export default App;