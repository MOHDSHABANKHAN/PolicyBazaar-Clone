import { useEffect } from 'react'
import Leftcomp from './Leftcomp'
import Navbar from './Navbar'
import { useState } from 'react'
import {Link} from 'react-router-dom'




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
            <Navbar/>
             <div style={{display:'flex',marginTop:"50px"}}>
            <div>
             {/* <h1>Left Side</h1> */}
             <Leftcomp/>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.5%", marginTop:"50px", width:"100%"}}>
             {/* <h1>Right Side</h1> */}
             {
             product.map((ele)=>{
              return  <div style={{textAlign:"left"}}>
                {/* <Link to="/productDetails"> */}
              <img style={{cursor: "pointer"}} src={ele.img} alt="image" width="100%"/>
              <div style={{}}>{ele.name}</div>
              <div>{ele.gender}</div>
              <div >MRP : ₹ {ele.price}</div>
                </div>
              })
            }
            </div>
            </div>
        </div>
    )
}

export default Product 