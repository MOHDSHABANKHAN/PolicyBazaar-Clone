import Leftitem from "./Leftitem"

function Leftcomp(props){
    return (
        <div style={{ width:"200px",listStyle:"none", marginTop:"50px", border:"2px sold red", paddingRight:"50px" , fontSize:"16px", textAlign:"left",color: "#111111",}}>
        <ul className="ul" style={{listStyleType:"none" , marginLeft:"-40px"}}>
            <li style={{ marginBottom:"10px", display:"flex", justifyContent:"space-between"}}>Life Style </li>
            <li style={{ marginBottom:"10px"}}>Jorden</li>
            <li style={{ marginBottom:"10px"}}>Running</li>
            <li style={{ marginBottom:"10px"}}>Basketball</li>
            <li style={{ marginBottom:"10px"}}>Football</li>
            <li style={{ marginBottom:"10px"}}>Training </li>
            <li style={{ marginBottom:"10px"}}>Sketeboarding</li>
            <li style={{ marginBottom:"10px"}}>Golf</li>
            <li style={{ marginBottom:"10px"}}>Tennis</li>
            <li style={{ marginBottom:"10px"}}>Athletics</li>
            <li style={{ marginBottom:"10px"}}>Walking</li>
        </ul>
        <ul className="ul" style={{listStyleType:"none", marginTop:"50px" , marginLeft:"-40px" }}>
            <li style={{ marginBottom:"10px"}}>Gender <span> w</span></li>
            <li style={{ marginBottom:"10px"}}>Sort By Price</li>
            <li style={{ marginBottom:"10px"}}>Size</li>
            <li style={{ marginBottom:"10px"}}>Color</li>
            <li style={{ marginBottom:"10px"}}>Best For</li>
        </ul>
        
        </div>
       
        
    )
}
export default Leftcomp