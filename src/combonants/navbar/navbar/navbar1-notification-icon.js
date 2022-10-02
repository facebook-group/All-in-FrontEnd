import React, { useEffect, useState } from "react";
import axios from 'axios';

import EngineeringIcon from '@mui/icons-material/Engineering';


//rect icons
import {IoIosNotifications} from "react-icons/io";
import {MdEmail} from "react-icons/md"



//import combonants section 
import NavBar1Card from "./navbar1-notification-slider"
import Main_bar_personal_information_logout from "../logout-personal-information/main-bar";

import io from "socket.io-client"
import Report_post_notification from "./Report-post-notification/navbar1-report-post-notification";
import Role_update_request from "./admin-request-bar/Role_update_request_admin";
const socket=io(process.env.REACT_APP_API);





let mydata
if(window.localStorage.mydata){
     mydata=(JSON.parse(window.localStorage.mydata))
}


const Navbar1=({notification,ReportNotification})=>{
    const [FrendNotification,setFrendNotification]=useState()
    const [displaybar,setdisplaybar]=useState(false)

    const [show_hide_information_logout,setshow_hide_information_logout]=useState(false)


    const [Show_Hide_Role_damin,setShow_Hide_Role_damin]=useState(false)
    const [Role_Request_Data,setRole_Request_Data]=useState(false)

    


    //every time come notification from soket io the useEffice Will Run To Update Value
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_API}notification/${mydata.regusterid}`).then((a)=>(setFrendNotification(a.data)))
    },[notification])

    const notification_Display=(e)=>{
        const selectItem=(e.currentTarget.getAttribute("datatype"))
        displaybar===false?setdisplaybar(selectItem):setdisplaybar(false)
    }

    let frendNotificationWillLoop
    if(FrendNotification!==undefined){
        frendNotificationWillLoop=FrendNotification.map((a,i)=>(
            <NavBar1Card data={a} key={i}/>
        ))

    }

    //---------------------------------- logout Bar Display --------------------------------------------//
    const show_personalinformation_logout=()=>{
        show_hide_information_logout==false?setshow_hide_information_logout(true):setshow_hide_information_logout(false)
    }


    //------------------------------Role Admon Secrion -------------------------------------------------//

    useEffect(()=>{
        let data= axios.get(`${process.env.REACT_APP_API}getallupdaterole`).then((data)=>{
            setRole_Request_Data(data.data) 
        })
    },[])


    const showAdminRequest=()=>{
        Show_Hide_Role_damin==false?setShow_Hide_Role_damin(true):setShow_Hide_Role_damin(false)

    }
    const FilterRole=(data)=>{
        setRole_Request_Data(data)
    }








    return(
        <div className="navbarnotifcation">
            <div style={{position:"relative"}}>
                <span  className="icon icon-for-notification" onClick={notification_Display} datatype="frend"  >
                    <IoIosNotifications />
                </span>
                {FrendNotification!==undefined?<p className="frendnotification">{FrendNotification.length>0?FrendNotification.length:<></>}</p>:<></>}
            </div>

            <span  className="icon  icon-for-notification" onClick={notification_Display} datatype="massage" >
                <MdEmail />
            </span>
            {mydata.role!=='admin'? <Report_post_notification ReportNotification={ReportNotification}/>:<></>}


            <div style={{position:"relative"}}>
                {mydata.role=='admin'?<span className="icon  icon-for-notification"><EngineeringIcon onClick={showAdminRequest} /></span>:<></>}
                {Show_Hide_Role_damin==true &&Role_Request_Data!==false?<Role_update_request MyRole_admin_date={Role_Request_Data} FilterRole={FilterRole}/>:<></>}
                {mydata.role=='admin'&&Role_Request_Data!==false&&Role_Request_Data.length!==0?<p className="pointer-role">{Role_Request_Data.length}</p>:<></>}            
            </div>

            {displaybar=="frend"?   
                 <div className="navbar1allcontainer">
                        {frendNotificationWillLoop!==undefined?frendNotificationWillLoop:<></>}
                 </div>:<></>}


            {show_hide_information_logout===true? <Main_bar_personal_information_logout/>:<></>}

            <img src={`${mydata.image}`} alt="" style={{cursor:"pointer"}} onClick={show_personalinformation_logout}/>
           

        </div>
    )
}

export default Navbar1