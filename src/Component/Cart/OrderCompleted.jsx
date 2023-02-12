import orderImg from "../Cart/img/orderPlaced.gif"
let OrderCompleted = ()=>{
    let divStyle = {
        textAlign : "center",
        marginTop: "30px",
        display: "block"
    }

    let btnStyle ={
            backgroundColor: "black",
            color: "white",
            width: "40%",
            borderRadius: "30px",
            fontWeight: "30px",
            padding:"10px"

    }
    return(
        <>
        <div style={divStyle}>
            <p>
            <img src={orderImg} alt="placed" />
            </p>
            
            <button style={btnStyle}>Go Back to Home</button>
        </div>
        
        </>
    )
}

export default OrderCompleted;