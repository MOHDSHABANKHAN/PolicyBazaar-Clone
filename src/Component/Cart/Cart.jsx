import { useEffect, useState } from 'react';
import './cart.css';
import dlte from "../Cart/img/delete.png"
import { Link } from 'react-router-dom';
const  products =  [
  {
    "id": 1,
    "name": "Nike Tempo",
    "category": "Men's Shoes",
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86b70843-0d71-4aa1-8d18-18b94bc097b7/air-max-90-se-shoes-ltJLHs.png",
    "price": 14000,
    "cartQuantity": 1,
    "decp":"Sail/Ashen Slate/Hemp/White"
  }
        ]

let Cart = () =>{
  const [total,setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  var totalCartPrice = 0;

  useEffect(()=>{
    setCart(products)
    setTotal(totalCartPrice);
  },[])
  
  let dlItem = (index)=>{
    let newList = cart.filter((e,i)=>{
      return (index !== i)
    })
    setCart(newList);
    setTotal((p)=> p - cart[index].price)
  }

  const handleDecrement = (cart_id) => {
    setCart(cart => 
        cart.map( (item) => 
            cart_id === item.id ? {...item, cartQuantity: item.cartQuantity - (item.cartQuantity > 1 ? 1:0) } : item
        )
        
    );
    setTotal(totalCartPrice);
}
const handleIncrement = (cart_id) => {
    setCart(cart => 
        cart.map( (item) => 
            cart_id === item.id ? {...item, cartQuantity: item.cartQuantity + (item.cartQuantity < 10 ? 1:0)} : item
        )
    );
    setTotal(totalCartPrice);
}
  
 

    return(
        <>
        <h3 style={{textAlign:"center"}}>Bag</h3>
        <div id="cartContainer">
            
        <div id="myproducts">
                    {cart.map((e,i)=>{
                      totalCartPrice += e.price * e.cartQuantity;
                        return(
                           <div id="mypdts">
                                <div className='pdChild' >
                                    <img src={e.image} alt={e.id} />
                                </div>
                               
                                    <div id="cartDec" >
                                        <p id="myTitle"><b>{e.name}</b></p>
                                        <p id="myDes">{e.category}</p>
                                        <p>{e.decp}</p>
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                          <label ><b>Size: </b></label>
                                            <select name='Select Size' id="">
                                              <option value="5">5</option>
                                              <option value="6">6</option>
                                              <option value="7">7</option>
                                              <option value="8">8</option>
                                              <option value="9">9</option>
                                              <option value="10">10</option>
                                              <option value="11">11</option>
                                              <option value="12">12</option>
                                            </select>  
                                            <label ><b>Quantity:</b> </label>        
                                              <button onClick={() => handleDecrement(e.id)}>-</button>
                                              <button>{e.cartQuantity}</button> 
                                              <button onClick={() => handleIncrement(e.id)}>+</button>                                          
                                        </div> 
                                        <br />                                     
                                    </div>  
                               <div style={{textAlign:"right", width:"100%", height:"20px"}}>
                                <p >{`   MRP: ₹ ${e.price}`}</p>
                                <img src={dlte} alt={e.id} onClick={()=>{dlItem(i)}}/>
              
                                </div>
                           </div>
                           
    
                        )
                    })}  
         </div>
                
            
            
            <div id="myTotal">
                <h3 style={{textAlign:"center"}}>Summary</h3>
                <div id='mySummary'>
                    <p>Subtotal</p>
                    <p>{totalCartPrice}</p>
                    <p>Handling</p>
                    <p>Free </p>
                    <p>Total</p>
                    <p>{totalCartPrice}</p>
                </div>
                <div>
                  <Link to={"/payment"}>
                  <button style={{backgroundColor:"black",
                     color:"white", borderRadius:"80px", width:"100%",
                     padding:"10px"
                }}>Checkout</button>
                  </Link>
                    
                </div>
            </div>
        </div>
        </>
        
       
    )
}

export default Cart;