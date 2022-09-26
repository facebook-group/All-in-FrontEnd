import React from "react"


import AcUnitIcon from '@mui/icons-material/AcUnit';



import Delete_Post_Part from "./Report-Rate-Delete-Card.js/Delete-post";
import Report_On_Post from "./Report-Rate-Delete-Card.js/Report-on-post";
import Rate_Post_Section from "./Report-Rate-Delete-Card.js/Rate-post-part";

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Person_Nav_Card=({postdata,doReport})=>{
    

    return(
        <div className="card1-person-information-bar">
            <ul className="post-bar">
                <Report_On_Post postdata={postdata} doReport={doReport}/>
                <Delete_Post_Part mydata={mydata} postdata={postdata} doReport={doReport}/>
                <li>
                    <div>
                        <h1>inclusion</h1>
                        <p>Show less similar posts </p>
                    </div>
                    <AcUnitIcon sx={{marginTop:"7px",fontSize:"1.8em"}}/>                    
                </li>

            </ul>

            <Rate_Post_Section mydata={mydata} doReport={doReport} postdata={postdata}/>
        </div>
    )
}


export default Person_Nav_Card