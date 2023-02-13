import {Link} from "react-router-dom"
function Nav(){
return(
    <div style={{height:"100px", backgroundColor:"black",}}> 
        <Link   style={{color:"white",textDecoration:"none"}} to="/Signup">Signup</Link><br/><br/>
        <Link   style={{color:"white",textDecoration:"none"}} to="/cart">Cart</Link>
    </div>
)
}
export default Nav