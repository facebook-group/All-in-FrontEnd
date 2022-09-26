import React, { useState } from "react";
import SignUp1 from "./signup-option/signup1";
import SideSignup from "./sidesection/Sidesection-Signup";
import "../signup/style-signup/signup.css"





const Signup=()=>{
    const [stateemail,setstateemail]=useState(false)
    const statusemail=(data)=>{
        setstateemail(data)
    }
    return(
        <div className="signup-container">
            <div className="signup-onformation">
                <h1>signup</h1>
                <p>you have the acces to signup</p>
            </div>
        <SideSignup/>
        <SignUp1 data={statusemail}/>
        {stateemail?<p className="stateemail">email is token</p>:<></>}
        </div>
    )
}  



  export default Signup