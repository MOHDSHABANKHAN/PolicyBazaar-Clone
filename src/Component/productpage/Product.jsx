import react from 'react'
import Leftcomp from './Leftcomp'
import Navbar from './Navbar'
import Rightcomp from './Rightcomp'
let data  = [
    {
        id:"1",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/803c6ec4-c374-49c0-aec6-46d3145ee036/tempo-road-running-shoes-chNfdw.png",
        name:"Nike Tempo",
        gender:"Male",
        price:"₹ 14000",
        quantity:"1"
    },
    {
        id:"2",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 16000",
        quantity:"1"
    },
    {
        id:"3",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 16000",
        quantity:"1"
    },
    {
        id:"4",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 4982.00",
        quantity:"1"
    },
    {
        id:"5",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 7000.00",
        quantity:"1"
    },
    {
        id:"6",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 9000.00",
        quantity:"1"
    },
    {
        id:"7",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98255ce1-9f0b-449a-8d9f-f8009e824107/infinity-pro-2-golf-shoes-drLGkR.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 10000.00",
        quantity:"1"
    },
    {
        id:"8",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 14000.00",
        quantity:"1"
    },
    {
        id:"9",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98255ce1-9f0b-449a-8d9f-f8009e824107/infinity-pro-2-golf-shoes-drLGkR.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 16000.00",
        quantity:"1"
    },
    {
        id:"10",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fccfa899-99b4-4529-a9f2-cbb259027db4/pegasus-39-road-running-shoes-wd8m6T.png",
        name:"Nike Bike",
        gender:"Male",
        price:"₹ 16000.00",
        quantity:"1"
    }
]




function Product(){
    return(
        
        <div>
            <Navbar/>
             <h1>Product page</h1>
             <div style={{display:'flex'}}>
            <div>
             {/* <h1>Left Side</h1> */}
             {
             data.map((ele)=>{
              return <div style={{width:"200%"}}> <Leftcomp {...ele}/></div>
             })
            }
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", border:"5px solid blue", alignItems:"end"}}>
             {/* <h1>Right Side</h1> */}
             {
             data.map((ele)=>{
              return  <div style={{}}><Rightcomp {...ele}/></div>
             })
            }
            </div>
            </div>
        </div>
    )
}

export default Product 