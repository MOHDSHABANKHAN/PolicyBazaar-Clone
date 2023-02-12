import logo from './logo.svg';
import './App.css';
import Signup from "./Component/signup"
import  Login from "./Component/login"
import Nav  from "./Component/nav"
import  Home from "./Component/Home"

import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    
  <Nav/>
    <Routes>
      <Route path="/Signup" element={ <Signup/>}/>
      <Route path="/Login" element={ <Login/>}/>
      <Route path="/Home" element={ <Home/>}/>
    </Routes>
  
    </div>
  );
}

export default App