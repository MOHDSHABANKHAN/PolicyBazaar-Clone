
import React, { useState,useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const [valurEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const navigate=useNavigate();
  // const navigateToHome=()=>{
  //   console.log("navigate")
  //   // navigate("./Home")
  // }
    

  useEffect(() => {
    const storedEmail= localStorage.getItem("email");
    const storedPassword = JSON.parse(localStorage.getItem("password"));
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);
  console.log(loginEmail,loginPassword)

  const handleSubmit = e => {
    e.preventDefault();

    
 

    if (loginEmail== valurEmail && loginPassword == valuePassword) {
      // navigateToHome();
      alert("Login successful!")
      navigate("/")
      
      
      // ...
    } else {
    
      alert("Login failed. Please check your email and password.");
    }}
  

  return (
    <div className="container">
      <h2>Your Account <br /> For Everything</h2>
      <form onSubmit={handleSubmit} >
        <div className="container-2">
          <input
            type="email"
            placeholder="Email"
            value={valurEmail}
            onChange={(e) => setValueEmail(e.target.value)}

          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <br />
        </div>
        <div className="container-4">
          <input type="checkbox" />
          <label>
            Keep me sign in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgotten
            Your Password?
          </label>
        </div>

        <p className="container-p">
          By logging in, you agree to Nike's Privacy Policy and <br />
          Terms of Use.
        </p>
<button className="container-btn" type="submit">
          Sign In
        </button>
       
      </form>

      <a href="./signup.jsx"><p className="container-p1" >Not a Member? Join Us. </p></a>
    </div>
  );
  }

export default Login;





// import React, { useState } from "react";
// import "./login.css";
// import { Link } from "react-router-dom";

// function Login() {
//   const [loginEmail, setEmail] = useState("");
//   const [loginPassword, setPassword] = useState("");
//   // console.log(password,email)
//   const handleSubmit = e => {
//     e.preventDefault();

//     const storedEmail = JSON.parse(localStorage.getItem("email"));
//     const storedPassword= JSON.parse(localStorage.getItem("password"));
 

//     if (storedEmail== loginEmail && storedPassword == loginPassword) {
//       console.log(storedEmail+""+loginEmail)
//       console.log(storedPassword+""+loginPassword)
//       alert("Login successful!");
//       // ...
//     } else {
    
//       alert("Login failed. Please check your email and password.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Your Account <br /> For Everything</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="container-2">
//           <input
//             type="email"
//             placeholder="Email"
//             value={loginEmail}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={loginPassword}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//         </div>
//         <div className="container-4">
//           <input type="checkbox" />
//           <label>
//             Keep me sign in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgotten
//             Your Password?
//           </label>
//         </div>

//         <p className="container-p">
//           By logging in, you agree to Nike's Privacy Policy and <br />
//           Terms of Use.
//         </p>

//         <button className="container-btn" type="submit">
//           Sign In
//         </button>
//       </form>

//       <a href="./signup.jsx"><p className="container-p1" >Not a Member? Join Us. </p></a>
//     </div>
//   );
// }

// export default Login;
