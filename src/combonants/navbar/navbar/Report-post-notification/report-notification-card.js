import React from "react"
import Moment from 'react-moment';


//the card for notification section 
const Report_Post_Slider=({dataPost})=>{
    return(
        <>
        <div className="report-slider" >
            <div className="container">
            <img src={dataPost.image}alt="" />
                <div>
                    <p>you have report</p>
                    <p className="type-notification">sss</p>
                </div>
            </div>
            <div className="timecontainer">
              <Moment className="time" fromNow date={dataPost.updatedAt} />
            </div>

        </div>
        
        </>
    )
}

export default Report_Post_Slider