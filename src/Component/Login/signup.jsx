import "./signup.css";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
function Signup() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const [nameData, setnamedata] =useState("")
  const [male ,setMale ]= useState(true);
  const [female,setFemale] = useState(true);
  
  
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   localStorage.setItem("papa", JSON.stringify(formData));
    
  // };
  const handlemail=(e)=>{
    setEmail(e.target.value);
    localStorage.setItem("email",e.target.value);
  }
  const handlepasword=(e)=>{
    setPassword(e.target.value);
    localStorage.setItem("password",e.target.value);
  }
  const handlename=(e)=>{
    setnamedata(e.target.value);
    localStorage.setItem("name",e.target.value);
  }
 

  return (
    <div className="container">
      <img className="image-logo"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAe1BMVEX///8AAADf39/T09N8fHzw8PDPz8/7+/v4+Pjz8/O8vLyamprk5OS5ubkMDAylpaXq6upPT09kZGRYWFhvb2+Dg4OpqanJycmPj490dHTZ2dlAQECzs7NpaWklJSWioqIfHx80NDQVFRU6OjotLS2WlpZERESBgYESEhKLqKDUAAAECUlEQVR4nO3c63qiMBAG4AYRD2DF9YTWarXa9f6vcD2UipCEAJkkdL/3f5PMIzCTSZ6+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOGxgewFWROOFZ3sN5i397Ty2vQjTvN2EsYXtVRg2GPqMscnS9jrM6pw+L1EzP9I1YKBrIELx5s81aPYa9rWNuVtrG4pGfznf3qJmbyONwy6nGgfT7/Ypu/vT0TlwzNz9wbuj2TmNmmlOX73zXut4+gTJ50/Q7GPR0zz8xMmMGC2mLIMgfc0Z0/eV1OOeqjNWBJXpkDG3Pm3r09dz1DrT10N0GXlDMG49aarO0Jq+Mq7Z0Y1S/5Kqj/moNaevjNn1USIauwovnBSCZiwh+0k21+FnVKMruqTqV07UW+3p6yG+zTAmG1/BMtlzgqbefd3fKWsbPG835Qatc/fFNb/PYuXb1h2tBEGz1x1xXdH5nsh4+dILBM/31deQfP7D91TkEz3xxqLn+2pmYLuUVoUH+qlS3eHqIImaJV0DiwjS2Y4GJrtNmLzJgmb7DV36ytqaDDy31eKYmmp+JT9Tbolnumy1pM/31Zw2fWVEj0lJK9anVoLAYWzmGb/JVsZUc8i/3ymzDfJhdmqKT6mkPnlC0WGQedoU6E6dfVH9nXcOTZ91hk/za+1DZFrBJag6DBL93OOma9x4w91fcr3b6GjPc4vQMSa3fyJE12GQ6eaX0bh26OT7g1JHWz0+P7+SRl1Wb1HoD0oZK9EKCj84Y3U7erFi0nqweYch/4azeuX64Of8UtnWZIlW0Octya82Rq/aS31n+w7DmLuqk/oA4k6ZjOkSrUiQdBKlP44qfsm+mS/RigLR4iZlJXu8kbdPhN7ou2gKZuIF7sR/1R35H7WCNtNFU9CTLvLESzZx/aAvb5D9Z/xuWLLQt7CT7TZ7m5Vy9V306c4x7Mu7wnoPUz8Jd2HiV09ZWWQHnbU0CqUKO9sQoU75inU4Eh501hOWL7q5qYPXTGuVH9X8NdYproI6aqOd4go4O1KdbG9DxNaUYfvWtyFiZeVLfQfqw/xmNkRhT5zYhkjw9+JNrdzYhsjsCMIOTRzmN7XQHbWF05BaRnrDdmSrrUBrqX5yZautQF8B49JWW8W5PCQV705ttVUUTo/qMHIpS7Nl46jb9oynGobtVjupikadCMfaSZVwT86U7Fv6jKdqVq3t+44XlF+4K2rjd7wgrhp1W+rxUsJjQ6721OPl1JP5oRV7TnWe2nmY832VGhTu7Ji7SW3UWn6dY/ULf+xUlPDvN3zMfv9/0/EWs2xW3078cdCi7kJDg2gdBME6+n8iBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhd/gFHyi8u+kmPywAAAABJRU5ErkJggg=="></img>
      <h2>BECOME A NIKE MEMBER</h2>
      <div className="container-1">
        <p>
          Create your Nike Member profile and get first
          <br />
          access to the very best of Nike Product, inspiraion <br />
          and community
        </p>
      </div>
      <div className="container-2">
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handlemail}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlepasword}
        ></input> <br />
<input
          type="text"
          placeholder="name"
          name="name"
          value={nameData}
          onChange={handlename}
        ></input> <br />
 <input type="text" placeholder="Last Name"></input><br/>
       <input type="Date" placeholder="Date of Birth"></input><br/>
         <input type="country" placeholder="India"></input>

      </div>
      
          
      <div className="container-3">
        
        <input className="male" type="button" value="Male" onClick={()=>{

            if(male){
              document.querySelector(".male").style.border="2px solid black"
              document.querySelector(".female").style.border="1px solid grey";
              setMale(false);
              setFemale(true)
              console(male);
            }
              
              
        }}></input>
        <input className="female" type="button" value="Female"
         onClick={()=>{
          if(female){
            document.querySelector(".female").style.border="2px solid black"
          document.querySelector(".male").style.border="1px solid grey";
          setFemale(false);
          setMale(true)
          console(female);
          }
          
          
    }} ></input>
      </div>
      <div className="container-4">
        <input type="checkbox"></input>

        <label>
          Sign up for emails to get updates from Nike on
          <br /> products, offers and your Member benefits{" "}
        </label>
      </div>

      <p className="container-p">
        By creating an account, you agree to Nike's Privacy Policy
        <br /> and Terms of Use.
      </p>
      <Link to="/Login">
        <button className="container-btn" type="submit" onClick={()=>{

        }}> 
          Join US{" "}
        </button>
       
      </Link>
      <Link to="/Login">
      <p className="container-p1">Already a Member? Signin </p>
      </Link>
    </div>
  );
}
export default Signup;

























// import "./signup.css"
// import {Link} from "react-router-dom"
// import {useState} from "react"
// import { useHistory } from "react-router-dom";
// function Signup(){

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     console.log(email)
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);

//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);

//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("email",JSON.stringify(email) );
//     localStorage.setItem("password", JSON.stringify(password));
//     localStorage.setItem("name", JSON.stringify(name));
 
//   };

//   const redirect =()=> {
//     <Link to="/Login"> </Link>
//   }

// return(
//   <form onSubmit={handleSubmit}>
//     <div className="container">
//             <img className="image-logo"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAe1BMVEX///8AAADf39/T09N8fHzw8PDPz8/7+/v4+Pjz8/O8vLyamprk5OS5ubkMDAylpaXq6upPT09kZGRYWFhvb2+Dg4OpqanJycmPj490dHTZ2dlAQECzs7NpaWklJSWioqIfHx80NDQVFRU6OjotLS2WlpZERESBgYESEhKLqKDUAAAECUlEQVR4nO3c63qiMBAG4AYRD2DF9YTWarXa9f6vcD2UipCEAJkkdL/3f5PMIzCTSZ6+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOGxgewFWROOFZ3sN5i397Ty2vQjTvN2EsYXtVRg2GPqMscnS9jrM6pw+L1EzP9I1YKBrIELx5s81aPYa9rWNuVtrG4pGfznf3qJmbyONwy6nGgfT7/Ypu/vT0TlwzNz9wbuj2TmNmmlOX73zXut4+gTJ50/Q7GPR0zz8xMmMGC2mLIMgfc0Z0/eV1OOeqjNWBJXpkDG3Pm3r09dz1DrT10N0GXlDMG49aarO0Jq+Mq7Z0Y1S/5Kqj/moNaevjNn1USIauwovnBSCZiwh+0k21+FnVKMruqTqV07UW+3p6yG+zTAmG1/BMtlzgqbefd3fKWsbPG835Qatc/fFNb/PYuXb1h2tBEGz1x1xXdH5nsh4+dILBM/31deQfP7D91TkEz3xxqLn+2pmYLuUVoUH+qlS3eHqIImaJV0DiwjS2Y4GJrtNmLzJgmb7DV36ytqaDDy31eKYmmp+JT9Tbolnumy1pM/31Zw2fWVEj0lJK9anVoLAYWzmGb/JVsZUc8i/3ymzDfJhdmqKT6mkPnlC0WGQedoU6E6dfVH9nXcOTZ91hk/za+1DZFrBJag6DBL93OOma9x4w91fcr3b6GjPc4vQMSa3fyJE12GQ6eaX0bh26OT7g1JHWz0+P7+SRl1Wb1HoD0oZK9EKCj84Y3U7erFi0nqweYch/4azeuX64Of8UtnWZIlW0Octya82Rq/aS31n+w7DmLuqk/oA4k6ZjOkSrUiQdBKlP44qfsm+mS/RigLR4iZlJXu8kbdPhN7ou2gKZuIF7sR/1R35H7WCNtNFU9CTLvLESzZx/aAvb5D9Z/xuWLLQt7CT7TZ7m5Vy9V306c4x7Mu7wnoPUz8Jd2HiV09ZWWQHnbU0CqUKO9sQoU75inU4Eh501hOWL7q5qYPXTGuVH9X8NdYproI6aqOd4go4O1KdbG9DxNaUYfvWtyFiZeVLfQfqw/xmNkRhT5zYhkjw9+JNrdzYhsjsCMIOTRzmN7XQHbWF05BaRnrDdmSrrUBrqX5yZautQF8B49JWW8W5PCQV705ttVUUTo/qMHIpS7Nl46jb9oynGobtVjupikadCMfaSZVwT86U7Fv6jKdqVq3t+44XlF+4K2rjd7wgrhp1W+rxUsJjQ6721OPl1JP5oRV7TnWe2nmY832VGhTu7Ji7SW3UWn6dY/ULf+xUlPDvN3zMfv9/0/EWs2xW3078cdCi7kJDg2gdBME6+n8iBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhd/gFHyi8u+kmPywAAAABJRU5ErkJggg=="></img>
//             <h2>BECOME A NIKE MEMBER</h2>
//             <div className="container-1"> 
//             <p>Create your Nike Member profile and get first<br/>access to the very best of Nike Product, inspiraion <br/>and community</p>
//             </div>
//             <div className="container-2">
            
//             <input type="email" placeholder="Email"
//              value={email}
//              onChange={handleEmailChange} 
//              ></input><br/>

//             <input type="Password" placeholder="Password"  value={password}
//         onChange={handlePasswordChange}
//         ></input><br/>

//             <input type="text" placeholder="First Name"
//               value={name}
//               onChange={handleNameChange} ></input><br/>
//             <input type="text" placeholder="Last Name"></input><br/>
//             <input type="Date" placeholder="Date of Birth"></input><br/>
//             <input type="country" placeholder="India"></input>
//             </div>
//             <div className="container-3">
//             <input type="button" value="Male"></input>
//             <input type="button" value="Female"></input>
//             </div>
//            <div className="container-4">
            
//            <input type="checkbox" ></input>
//            <label>Sign up for emails to get updates from Nike on<br/> products, offers and your Member benefits  </label>
//            </div>
         
//             <p className="container-p">By creating an account, you agree to Nike's Privacy Policy<br/> and Terms of Use.</p>
//             {/* <Link to="/Login">  */}
//              <button onClick={redirect} className="container-btn">Join US </button>
//             {/* </Link> */}
         
//       <p className="container-p1" >Already a Member? Signin </p>
//     </div>
//     </form>
// )
// }
// export default Signup






















