import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


//the combonanats will using
import Frend_Connection_Card from "./Frend-connection-card";


// {onlinefrind} -->app.js get all online frend
const Connection_Frind=({onlinefrind})=>{

    
    return(
        <div className="connection-frind">
                <div className="header">
                    <ul>                   
                        <li><MoreVertIcon/></li>
                        <li><SearchIcon/></li>
                    </ul>
                    <p>My Frind</p>
                </div>

                <div className="chat-section">
                    <Frend_Connection_Card onlinefrind={onlinefrind}/>
                </div>

            </div>
    )
}


export  default Connection_Frind