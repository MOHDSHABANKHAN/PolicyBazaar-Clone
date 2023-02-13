import arrow from "../Cart/img/arrow.png";
import './Payment.css';
import { useNavigate } from "react-router-dom";
let Payment = ()=>{
  const navigate = useNavigate();

    let cards = [
    {
        "img" :"https://cdn.pharmeasy.in/payments/amazonpay_new.png",
        "title": "Amazon Pay",
    },
    {
        "img" :"https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png",
        "title": "MobiKwik",
    },
    {
        "img" :"https://cdn.pharmeasy.in/payments/card.png",
        "title": "Credit/Debit Card",
    },
    {
        "img" :"https://cdn.pharmeasy.in/payments/wallet.png",
        "title": "Wallet",
    },
    {
        "img" :"https://cdn.pharmeasy.in/payments/netbanking.png",
        "title": "Netbanking",
    },
    {
        "img" :"https://consumer-app-images.pharmeasy.in/payment-icons/cod.png",
        "title": "Cash on Delivery",
    }]

    function openNav(x) {
        
        
        if (x === 2) {
          document.getElementById("mySidenav").style.width = "500px";
        let div = document.querySelector("#payment_optn");
        div.classList.add("darkAndDullBackgound");
          let cross = document.getElementById("myCross");
        cross.style.display = "block";
          document.getElementById("mySidenav").innerHTML = `
            <a href="javascript:void(0)" class="closebtn" onclick={ closeNav}>&times;</a>
            <h3 style="font-size: 16px;  text-align: center;" class="paymentTxt">Enter New Card</h3> 
            
            <div style=" height: 380px;  text-align: center;">
            <div class="_2beHU" style="-webkit-box-align: center; -webkit-tap-highlight-color: transparent; align-items: center; border: 0px; box-sizing: border-box; display: flex; justify-content: space-around;" font-family: inherit; font-size: 14px; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 700; line-height: inherit; margin: 0px; outline: none; padding: 0px; user-select: text; vertical-align: baseline;">
                    <span class="_2IDPI" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px 5px; outline: none; padding: 0px; user-select: text; vertical-align: baseline; width: 40px;">
                      <img alt="support-icon" src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; margin: 0px; max-width: 100%; outline: none; padding: 0px; vertical-align: baseline;" onclick="openNav(1)"/>
                    </span>
                    <span class="_2IDPI" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px 5px; outline: none; padding: 0px; user-select: text; vertical-align: baseline; width: 40px;">
                      <img onclick="openNav(1)" alt="support-icon" src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; margin: 0px; max-width: 100%; outline: none; padding: 0px; vertical-align: baseline;" />
                    </span>
                    <span class="_2IDPI" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px 5px; outline: none; padding: 0px; user-select: text; vertical-align: baseline; width: 40px;">
                      <img onclick="openNav(1)" alt="support-icon" src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; margin: 0px; max-width: 100%; outline: none; padding: 0px; vertical-align: baseline;" />
                    </span>
                    <span class="_2IDPI" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px 5px; outline: none; padding: 0px; user-select: text; vertical-align: baseline; width: 40px;">
                      <img onclick="openNav(1)" alt="support-icon" src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; margin: 0px; max-width: 100%; outline: none; padding: 0px; vertical-align: baseline;" />
                    </span>
                    <span class="_2IDPI" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px 5px; outline: none; padding: 0px; user-select: text; vertical-align: baseline; width: 40px;">
                      <img onclick="openNav(1)" alt="support-icon" src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; margin: 0px; max-width: 100%; outline: none; padding: 0px; vertical-align: baseline;" />
                    </span>
                  </div>
                  <hr/>
            <div  style="margin: 10px; padding: 10px;" > 
            <br>
            <label >Card Number</label>
            <input id="myCardNo" type="tel" maxlength="16" style="height: 45px; width: 440px; font-size: 16px; border-radius: 5px; text-align: center;" placeholder="1111-1111-1111-1111" required autofocus><br>
            <div style="display: flex; justify-content: space-between;">
            <br><br>
            <div>
            <br>
              <label >Valid Through</label>
              
              <input id="myValid" type="text" style="height: 45px; width: 205px; font-size: 16px; border-radius: 5px; text-align: center;" placeholder="MM/YY">
            </div>
            <div>
            <br>
              <label >CVV</label>
             
              <input id="myCVV" type="tel" maxlength="3" style="height: 45px; width: 205px; font-size: 16px; border-radius: 5px; text-align: center; " placeholder="123">
            </div>
            </div>
            <br>
            <label >Name on Card</label>
            
            <input id="myName"" type="text" placeholder="eg. Ankit Kumar" style="height: 45px; width: 440px; font-size: 16px; border-radius: 5px; text-align: center;"><br><br>
            <button style="height: 45px; width: 440px; border-radius: 5px;color: white;background-color: #10847E; font-size: 16px; font-weight: bold;  border: 0ch;"  onClick="myCard()">Pay Now</button>
            </div>
            </div>
          
            `;
        } 
        // else if (x === 2) {
        //   document.getElementById(
        //     "mySidenav"
        //   ).innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            
      
            
        //     <div style=" height: 380px;  text-align: center;">
        //     <img  alt="icon" src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 12.67px; margin: 0px; outline: none; padding: 0px;align-items: center; width: 40px;" />
        //     <h3 style="font-size: 16px;  text-align: center;" class="paymentTxt">Enter Your Paytm Number</h3> 
        //     <hr/>
        //     <div  style="margin: 10px; padding: 10px;" > 
        //     <br>
        //     <label style="">Mobile Number</label><br><br>
        //     <input class="myMobile" type="tel" maxlength="10" style="height: 45px; width: 440px; font-size: 16px; border-radius: 5px; text-align: center;" placeholder="1234567890" required autofocus><br>
        //     <br><br>
        //     <button  style="height: 45px; width: 440px; border-radius: 5px; background-color: #10847E;color:white; font-size: 16px; font-weight: bold;  border: 0ch;"  onClick="myMobile()">Pay Now</button>
        //     </div>
        //     </div>
        //     `;
        // } 
        else if (x === 0) {
          document.getElementById("mySidenav").style.width = "500px";
        let div = document.querySelector("#payment_optn");
        div.classList.add("darkAndDullBackgound");
          let cross = document.getElementById("myCross");
        cross.style.display = "block";
          document.getElementById(
            "mySidenav"
          ).innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            
      
            
            <div style=" height: 380px;  text-align: center;">
            <img  alt="icon" src="https://cdn.pharmeasy.in/payments/amazonpay_new.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px; outline: none; padding: 0px; vertical-align: baseline; width: 40px;" />
            <h3 style="font-size: 16px;  text-align: center;" class="paymentTxt">Enter Your Amazon Pay Number</h3> 
            <hr/>
            <div  style="margin: 10px; padding: 10px;" > 
            <br>
            <label style="">Mobile Number</label><br><br>
            <input class="myMobile" type="tel" maxlength="10" style="height: 45px; width: 440px; font-size: 16px; border-radius: 5px; text-align: center;" placeholder="1234567890" required autofocus><br>
            <br><br>
            <button  style="height: 45px; width: 440px; border-radius: 5px; background-color: #10847E; color:white ; font-size: 16px; font-weight: bold;  border: 0ch;"  onClick="myMobile()">Pay Now</button>
            </div>
            </div>
            `;
        } else if (x === 1) {
          document.getElementById("mySidenav").style.width = "500px";
        let div = document.querySelector("#payment_optn");
        div.classList.add("darkAndDullBackgound");
          let cross = document.getElementById("myCross");
        cross.style.display = "block";
          document.getElementById(
            "mySidenav"
          ).innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            
      
            
            <div style=" height: 380px;  text-align: center;">
            <img  alt="icon" src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png" style="-webkit-tap-highlight-color: transparent; border: 0px; box-sizing: border-box; font: inherit; height: 40px; margin: 0px; outline: none; padding: 0px; vertical-align: baseline; width: 40px;" />
            <h3 style="font-size: 16px;  text-align: center;" class="paymentTxt">Enter Your MobiKwik Number</h3> 
            <hr/>
            <div  style="margin: 10px; padding: 10px;" > 
            <br>
            <label style="">Mobile Number</label><br><br>
            <input class="myMobile" type="tel" maxlength="10" style="height: 45px; width: 440px; font-size: 16px; border-radius: 5px; text-align: center;" placeholder="1234567890" required autofocus><br>
            <br><br>
            <button   style="height: 45px; width: 440px; border-radius: 5px; background-color: #10847E; color:white ; font-size: 16px; font-weight: bold;  border: 0ch;"  onClick="myMobile()">Pay Now</button>
            </div>
            </div>
            
            `;
        }else if(x === 5){
          
          navigate("/ordercompleted");
        }
      }
      
      
      
      
      function myMobile() {
        let x = document.querySelector(".myMobile").value;
        if (x <= 999999999) {
          alert("Mobile No. should be 10 digits.");
          return;
        }
        // parent.location = "orderCompleted.html";
      }
      function closeNav() {
        let div = document.querySelector("#payment_optn");
        div.classList.remove("darkAndDullBackgound");
        document.getElementById("mySidenav").style.width = "0";
        let cross = document.getElementById("myCross");
        cross.style.display = "none";
      }
      
      function myCard() {
        let x = document.querySelector("#myCardNo").value;
        if (x <= 999999999999999) {
          alert("Card No. should be 16 digits.");
          return;
        }
      
        let z = document.querySelector("#myValid").value;
        if (!z) {
          alert("Please Enter Expiry Date.");
          return;
        }
      
        let y = document.querySelector("#myCVV").value;
        if (y <= 99) {
          alert("CVV should be 3 digits.");
          return;
        }
      
        let a = document.querySelector("#myName").value;
        if (!a) {
          alert("Please Enter Name on Card.");
          return;
        }
      
        // parent.location = "orderCompleted.html";
      }

     

    return(
        <>
        <div >
        <h1 id="myCross" style={{textAlign:"center", display:"none"}} onClick={closeNav} >&times;</h1>
        <div id="payment_optn" style={{alignItems:"center", border:"1px solid grey", padding:"50px", width:"40%", marginLeft:"auto", marginRight:"auto",
    boxShadow:"0 0 10px grey", marginTop:"30px"}} >
            {cards.map((e, i)=>{
                return(
                    <>
                    <div style={{display:"flex", justifyContent:"space-between", lineHeight: "20px"}} onClick={()=>{openNav(i)}}>
                        <div style={{display:"flex"}}>
                            <img src={e.img} alt={e.title} style={{width:"40px", height:"40px", marginRight: "30px"}}/>
                            <h3>{e.title}</h3>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow" style={{height:"30px"}}/>
                        </div>
                    </div>
                    
                    <hr />
                    </>
                )
            })}
            
        </div>
        <div id="mySidenav" class="sidenav"></div>
        </div>

       
        </>
    )
}

export default Payment;