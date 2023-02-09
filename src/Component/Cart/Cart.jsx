// import { useState } from 'react';
import './cart.css';

let Cart = (props) =>{
  let sum = 0;
  const cartUpdt = (rs)=>{
    sum+= rs
  }

 const  products =  [
          {
            "id": 1,
            "name": "Product 1",
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "price": 10,
            "cartQuantity": 0
          },
          {
            "id": 2,
            "name": "Product 2",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "price": 15,
            "cartQuantity": 0
          },
          {
            "id": 3,
            "name": "Product 3",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 15,
            "cartQuantity": 3
          },
          {
            "id": 4,
            "name": "Product 4",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 23,
            "cartQuantity": 0
          },
          {
            "id": 5,
            "name": "Product 5",
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 17,
            "cartQuantity": 0
          },
          {
            "id": 6,
            "name": "Product 6",
            "category": "Cosmetics",
            "image": "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "price": 18,
            "cartQuantity": 0
          },
          {
            "id": 7,
            "name": "Product 7",
            "category": "Electronics",
            "price": 102,
            "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 0
          },
          {
            "id": 8,
            "name": "Product 8",
            "category": "Shoes",
            "price": 100,
            "image": "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
            "cartQuantity": 0
          },
          {
            "id": 9,
            "name": "Product 9",
            "category": "Electronics",
            "price": 300,
            "image": "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 0
          },
          {
            "id": 10,
            "name": "Product 10",
            "category": "Cosmetics",
            "price": 350,
            "image": "https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "cartQuantity": 0
          }
        ]

    return(
        <>
        <h3 style={{textAlign:"center"}}>Bag</h3>
        <div id="cartContainer">
        
            
                
        <div id="myproducts">
                    {products.map((e)=>{
                        return(
                           <div id="mypdts">
                            {cartUpdt(e.price)}
                            {/* {setSum((p)=> p + Number(e.price))}; */}
                                <div className='pdChild' >
                                    <img src={e.image} alt={e.id} />
                                </div>
                               
                                    <div id="cartDec" >
                                        <p id="myTitle"><b>{e.name}</b></p>
                                        <p id="myDes">{e.category}</p>
                                        <p>Desc...</p>
                                        <div>
                                            <button>Size</button>
                                            <button>Quantity</button>
                                        </div>
                                        <div>
                                            <button>Fav</button>
                                            <button>Remove</button>
                                        </div>
                                        
                                    </div>  
                               
                                <p style={{textAlign:"right", width:"100%"}}>{`   MRP: ₹ ${e.price}`}</p>
                                
                           </div>
                           
    
                        )
                    })}  
         </div>
                
            
            
            <div id="myTotal">
                <h3>Summary</h3>
                <div id='mySummary'>
                    <p>Subtotal</p>
                    <p>50680</p>
                    <p>Handling</p>
                    <p>Free</p>
                    <p>Total</p>
                    <p>{sum}</p>
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