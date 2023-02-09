
import react from 'react'

function Rightcomp({name, img, price, gender}){
    return (
        <div style={{border:"2px solid green"}}>
            <img src={img} alt="image" width="350px"/>
            <div><h3>{name}</h3></div>
            <div>{gender}</div>
            <div>MRP : {price}</div>
        </div>
    )
}
export default Rightcomp