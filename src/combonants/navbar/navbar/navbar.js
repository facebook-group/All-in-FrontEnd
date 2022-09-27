import React, { useEffect, useState } from "react";
import Navbar1 from "./navbar1-notification-icon";
import Navbar2 from "./navbar2-middel-icon";
import Navbar3 from "./navbar3-search";




import "../style/navbar.css"
//soket io section
import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}



const Navbar=()=>{
    const[notification,setnotification]=useState()
    const[ReportNotification,setReportNotification]=useState()

    //At first time connection with database make room to clinet to join in it
    useEffect(()=>{
    //at The First Connection Will Joint To These Room -->Eveery One With His Id 
    socket.emit("JoinToRoom",mydata.regusterid)
    },[socket])

    //report notification section 
       useEffect(()=>{
              socket.on("send-the-report-to-person-do-post",(data)=>{
                setReportNotification(data)
              })
      },[socket])
  

    useEffect(()=>{
    //get the notification foor frind
    socket.on("notification",(data)=>{
      let datamy= data.filter((a)=>a.PersonAcceptFrendRequest==mydata.regusterid)
      setnotification(datamy)
    })  
    },[socket])



    return(
        <div className="navbarcontainer">
            <Navbar1 notification={notification}  ReportNotification={ReportNotification}/>
                <Navbar2 informationbar={false}/>
            <Navbar3/>
       </div>
    )
}

export default Navbar