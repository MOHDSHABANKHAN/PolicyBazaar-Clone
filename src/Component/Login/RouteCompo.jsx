
import Signup from "./signup"
import  Login from "./login"
import {Route,Routes} from "react-router-dom"
import  Home from "./Home"

function RouteCompo () {
    return (<div>


<Routes>
      <Route path="/Signup" element={ <Signup/>}/>
      <Route path="/Login" element={ <Login/>}/>
      <Route path="/Home" element={ <Home/>}/>
    </Routes>
    </div>)


}
export default RouteCompo