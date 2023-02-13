import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Leftcomp from './Leftcomp'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function ProductDetails(props) {
    const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://wild-rose-cape-buffalo-kit.cyclic.app/Data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);
  return(
        
    <div style={{width:"70%", margin:"auto",marginTop:"20px",padding:"20px" ,border:"1px solid grey "}}> 
         <div style={{display:'flex',marginTop:"10px"}}>
        <div>
         {/* <h1>Left Side</h1> */}
        
        </div>
        <div style={{display:"flex", marginTop:"20px", width:"100%"}}>
         
                <div  style={{textAlign:"left"}}>         
                    <img style={{cursor: "pointer", width:"70%"}} src={product.img} alt={product.name} width="100%"/>
                </div>
                <div>
                    <h1> {product.name}</h1>
                    <p>Gender: {product.gender}</p>
                    <p>MRP: ₹ {product.price}</p>
                    <Link to={"/cart"}>

                    <button style={{backgroundColor:"black",
                     color:"white", borderRadius:"80px", width:"100%",
                     padding:"10px"
                
                }}>Buy Now</button>

                    </Link>
                
                
                </div>
                

                
            
        </div>
        </div>
    </div>
)
}

export default ProductDetails;