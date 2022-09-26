import React, { useRef, useState } from "react"
import Edote_Work_IInformation from "./edite-work-information"

import styled from "styled-components"
import axios from 'axios';
import { useNavigate } from "react-router";

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
        <StyleAll>
        <div className="row">
            <div className="col-md-12">
            <form action="index.html" method="post" ref={getdata} > 
                <h1> Edite Personal Information </h1>                
                        <legend><span className="number">1</span> Your Basic Info</legend>
                        
                        <label >Full Name:</label>
                        <input type="text" id="name" name="fullName"/>
                        
                        <label >Phone Number:</label>
                        <input type="tel" id="numberphone" name="phoneNumber"/>
                    
                        <label >Age:</label>
                        <input type="date" id="age"  name="age"  placeholder="DD/MM/YYYY"/>
                        
                        <label>Gender</label>
                        <input type="radio" id="under_13" value="male" name="gender"/><label  className="light"  style={{marginRight:"20px"}}>Male</label>
                        <input type="radio" id="over_13" value="femal" name="gender"/><label  className="light"  style={{marginRight:"20px",marginBottom:"20px"}}>Femal</label>
                
                        <legend style={{marginTop:"20px"}}><span className="number">2</span> Your Profile</legend>
                        <Edote_Work_IInformation/>            
            
                <button className="button-information-section" onClick={get_edite_information} >Edite Information</button>
                
            </form>
                </div>
            </div>

            </StyleAll>
                
        </>

    )
}

export default Edite_personal_information



const StyleAll=styled.div`
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}

form {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
  cursor: pointer;

}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
  cursor: pointer;

}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;

}

button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: rgb(77, 77, 245);
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;


}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;

}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: silver;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 480px;
  }

}


`