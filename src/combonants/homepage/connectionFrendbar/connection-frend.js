import React from "react"
import Frend_Connection_Card from "./Frend-connection-card";


// {onlinefrind} -->app.js get all online frend
const Connection_Frind=({onlinefrind})=>{

    const Addactive=(e)=>{
        console.log(        document.querySelector(".connection-frind").classList.toggle("active")        )
    }

    
    return(
        <div className="connection-frind" >
                <div className="header" onClick={Addactive}>
                    <p>chat with my friend</p>
                </div>

                <div className="chat-section">
                    <Frend_Connection_Card onlinefrind={onlinefrind}/>
                </div>

            </div>
    )
}


export  default Connection_Frind