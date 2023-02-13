import { useEffect } from 'react'
import Leftcomp from './Leftcomp'
import Navbar from './Navbar'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import ProductDetails from './ProductDetails'




function Product(){

    const [product, setProduct] = useState([]);


    useEffect(()=>{
            fetch(`https://wild-rose-cape-buffalo-kit.cyclic.app/Data`).then((res)=>res.json()).then((data)=>{
                // console.log(data)
                 setProduct(data);
            })  
       
    },[])


    return(
        
        <div style={{width:"90%", margin:"auto"}}> 
            
             <div style={{display:'flex',marginTop:"50px"}}>
            <div>
             {/* <h1>Left Side</h1> */}
             <Leftcomp/>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.5%", marginTop:"50px", width:"100%"}}>
             {/* <h1>Right Side</h1> */}
             {
             product.map((ele)=>{
              return(
                <div key={ele.id} style={{textAlign:"left"}}>
        
             <Link to={`/productdetails/${ele.id}`}> 
             
              <img style={{cursor: "pointer"}} src={ele.img} alt={ele.name} width="100%"/>
              
              </Link>
             
             
              
                
                <div>{ele.name}</div>
                
              
              <div  style={{color:"rgb(152,152,152)"}}>Men's Shoes</div>
              <div  style={{color:"rgb(152,152,152)"}}>1 Colour</div>
              <div style={{marginTop:"20px" }} >MRP : ₹ {ele.price}</div>
                </div>
              )
              })
            }
            </div>
            </div>
        </div>
    )
}

export default Product 