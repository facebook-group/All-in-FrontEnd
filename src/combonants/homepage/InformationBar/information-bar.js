import React from "react"
import { json, useNavigate } from "react-router";

import {FcHome} from "react-icons/fc";
import {FcCollaboration} from "react-icons/fc";
import {FcVoicePresentation} from "react-icons/fc";
import {FcFilmReel} from "react-icons/fc";
import {FcBusinessman} from "react-icons/fc";
import {FcAdvertising} from "react-icons/fc";
import {FcSettings} from "react-icons/fc";
import {FcShop} from "react-icons/fc"


import './style.scss';
import { useEffect } from "react";
import { useContext } from "react";
import { ShowBar_Create_Context } from "../../context-api/show-information-bar";


let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}


const Information_bar=()=>{
    const Navi=useNavigate();
    const showIn_formation_Context=useContext(ShowBar_Create_Context);

    console.log(mydata)



    const Gotopage=(e)=>{
      Navi(e.currentTarget.getAttribute("datatype"))
    }

    useEffect(()=>{
      document.querySelector(".information-bar").classList.toggle("active-element")
    },[showIn_formation_Context])


    useEffect(()=>{
     document.querySelector(".information-bar").childNodes.forEach((a)=>(a.addEventListener("click",Gotopage)))     
    },[])

    return (
      <ul className='information-bar'>
        <li>
          <img src={mydata.image} alt="" style={{width:"35px",height:"35px",borderRadius:"50%"}}/>
          <p>{mydata.fullName}</p>
        </li>
        <li datatype="/home">
          <span><FcHome style={{fontSize:"1.7em"}}/></span>
          <p>home Page</p>
        </li>
        <li  datatype="/frind">
          <span> <FcCollaboration style={{fontSize:"1.7em"}}/></span>
          <p>Add Frend </p>
        </li>
        <li datatype="/myfrend">
          <span> <FcVoicePresentation style={{fontSize:"1.7em"}}/></span>
          <p>My Frend </p>
        </li>
        <li datatype="/frendrequest">
          <span><FcAdvertising style={{fontSize:"1.7em"}}/> </span>
          <p>Frend Request</p>
        </li>
        <li datatype="/personalPage">
          <span><FcBusinessman style={{fontSize:"1.7em"}}/> </span>
          <p>Personal Account</p>
        </li>
        <li datatype="/movies" >
          <span><FcFilmReel style={{fontSize:"1.7em"}} /> </span>
          <p>Movei App</p>
        </li>
        <li datatype="/setting" >
          <span><FcSettings style={{fontSize:"1.7em"}} /> </span>
          <p>Setting Programe</p>
        </li>
        <li datatype="/shop" >
          <span><FcShop style={{fontSize:"1.7em"}} /> </span>
          <p>Shop Section </p>
        </li>

      </ul>
    )
}

export default Information_bar