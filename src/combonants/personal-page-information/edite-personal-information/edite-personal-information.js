import React, { useRef, useState } from "react"
import { useNavigate } from "react-router";


import Edote_Work_IInformation from "./edite-work-information"
import "./style/style.scss";

import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)



let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}


const Edite_personal_information=()=>{
  const getdata=useRef()
  const Navi=useNavigate()


  const get_edite_information=(e)=>{
    e.preventDefault();
    let data={}
     getdata.current.fullName.value!==""?data.fullName=getdata.current.fullName.value:<></>;
     getdata.current.phoneNumber.value!==""?data.phoneNumber=getdata.current.phoneNumber.value:<></>;
     getdata.current.age.value!==""?data.age=getdata.current.age.value:<></>;
     getdata.current.gender.value!==""?data.gender=getdata.current.gender.value:<></>;
     getdata.current.languageSpeak.value!==""?data.languageSpeak=getdata.current.languageSpeak.value:<></>;
     getdata.current.place.value!==""?data.place=getdata.current.place.value:<></>;
     getdata.current.study.value!==""?data.study=getdata.current.study.value:<></>;
     getdata.current.socialSituation.value!==""?data.socialSituation=getdata.current.socialSituation.value:<></>;

     data.regusterid=mydata.regusterid;

     if(getdata.current.user_job.value!==""){
      socket.emit("updateRole",{updateRole:getdata.current.user_job.value,regusterid:mydata.regusterid,fullName:mydata.fullName,image:mydata.image})
     }

    socket.emit("updateuserdata",data)
    localStorage.removeItem("mydata");
    Navi("/")
  }
  
    return(
        <>
            <div className="container-editeInformation">
                <div className="container-editeInformation">
                        <form action="index.html" method="post" ref={getdata} > 
                            <h1> Edit Personal Information </h1>                
                                    <div className="container-item"> 
                                        <label className="icon1-label">Full Name:</label>
                                        <input className="icon1-input"  type="text" id="name" name="fullName"/>
                                    </div>

                                    <div className="container-item">
                                        <label className="icon1-label" >Phone Number:</label>
                                        <input className="icon1-input" type="tel" id="numberphone" name="phoneNumber"/>
                                    </div>

                                    <div className="container-item">
                                        <label className="icon1-label">Age:</label>
                                        <input className="icon1-input" type="date" id="age"  name="age"  placeholder="DD/MM/YYYY"/>
                                    </div>

                                    <div className="container-item">
                                        <label  className="icon1-label" >Gender</label>
                                        <select name="gender"  className="icon1-input">
                                          <option value="male" key="">Male</option>
                                          <option value="femal" key="">Female</option>
                                        </select>
                                    </div>
                          
                                    <Edote_Work_IInformation/>            
                            <button className="button-custom" onClick={get_edite_information} >Edit Information</button>
                        </form>
                    </div>
                </div>
                    
        </>

    )
}

export default Edite_personal_information



