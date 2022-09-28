import React from "react";
import SignUp1 from "./signup-option/signup1";
import "../signup/style-signup/signup.css";
import reguster from "../../assest/reguster.png";
import {motion} from "framer-motion"





const Signup=()=>{
    return(
        <motion.div className="signup-container" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <div className="side-section">
                <motion.img src={reguster} alt=""  style={{width:"100%",height:"500px"}} initial={{y:-50}} animate={{y:0}} transition={{duration:3,yoyo:Infinity}}/>
                <p>Welcome to our little family, we are ready to share the best moments</p>
            </div>
            <SignUp1 />
        </motion.div>
    )
}  



  export default Signup