import React from "react"
import SummarizeIcon from '@mui/icons-material/Summarize';




import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Report_On_Post=({postdata,doReport})=>{
    //report on the post
    const repostPost=()=>{
            socket.emit("report-on-post",{postId:postdata.postId,report:postdata.report,personDoPostId:postdata.personDoPostId,publisherImage:postdata.publisherImage,publisherName:postdata.publisherName})
            //run the perant to hide the bar to close bar
            doReport()
    }
    
    return(
        <>
                <li onClick={repostPost}>
                    <div>
                        <h1>Report a post</h1>
                        <p>This post violates some rights </p>
                    </div>
                    <SummarizeIcon sx={{marginTop:"7px",fontSize:"1.8em"}}/>
                </li>
        </>
    )
}

export default Report_On_Post