import { useEffect, useState } from 'react';
import './cart.css';
import dlte from "../Cart/img/delete.png"
import Payment from './PaymentPage';
const  products =  [
          {
            "id": 1,
            "name": "Product 1",
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "price": 10,
            "cartQuantity": 1
          },
          {
            "id": 2,
            "name": "Product 2",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "price": 15,
            "cartQuantity": 1
          },
          {
            "id": 3,
            "name": "Product 3",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 15,
            "cartQuantity": 1
          },
          {
            "id": 4,
            "name": "Product 4",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 23,
            "cartQuantity": 1
          },
          {
            "id": 5,
            "name": "Product 5",
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 17,
            "cartQuantity": 1
          },
          {
            "id": 6,
            "name": "Product 6",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 18,
            "cartQuantity": 1
          },
          {
            "id": 7,
            "name": "Product 7",
            "category": "Electronics",
            "price": 102,
            "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 1
          },
          {
            "id": 8,
            "name": "Product 8",
            "category": "Shoes",
            "price": 100,
            "image": "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
            "cartQuantity": 1
          },
          {
            "id": 9,
            "name": "Product 9",
            "category": "Electronics",
            "price": 300,
            "image": "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 1
          },
          {
            "id": 10,
            "name": "Product 10",
            "category": "Cosmetics",
            "price": 350,
            "image": "https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 1
          }
        ]

let Cart = () =>{
  const [total,setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  var totalCartPrice = 0;

  useEffect(()=>{
    setCart(products)
    setTotal(totalCartPrice);
  })
  
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
                                        <p>Desc...</p>
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
                    <button style={{backgroundColor:"black",
                     color:"white", borderRadius:"80px", width:"100%",
                     padding:"10px"
                
                }}>Checkout</button>
                </div>
            </div>
        </div>
        </>
        
       
    )
}

export default Cart;