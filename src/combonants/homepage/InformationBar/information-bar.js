import React from "react"
import { useNavigate } from "react-router";


import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieIcon from '@mui/icons-material/Movie';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './style.scss';
import { useEffect } from "react";



const Information_bar=()=>{
    const Navi=useNavigate();
    const Gotopage=(e)=>{
      Navi(e.currentTarget.getAttribute("datatype"))
    }


    useEffect(()=>{
     document.querySelector(".information-bar").childNodes.forEach((a)=>(a.addEventListener("click",Gotopage)))     
    },[])

    return (
      <ul className='information-bar'>
        <li datatype="/home">
          <span><HomeIcon style={{fontSize:"1.7em"}}/></span>
          <p>home</p>
        </li>
        <li  datatype="/frind">
          <span> <PersonAddIcon style={{fontSize:"1.7em"}}/></span>
          <p>Add Frend </p>
        </li>
        <li datatype="/myfrend">
          <span> <GroupIcon style={{fontSize:"1.7em"}}/></span>
          <p>My Frend </p>
        </li>
        <li datatype="/frendrequest">
          <span><GroupAddIcon style={{fontSize:"1.7em"}}/> </span>
          <p>Frend Request</p>
        </li>
        <li datatype="/personalPage">
          <span><AccountCircleIcon style={{fontSize:"1.7em"}}/> </span>
          <p>Personal Account</p>
        </li>
        <li>
          <span><MovieIcon style={{fontSize:"1.7em"}}/> </span>
          <p>Movei</p>
        </li>
      </ul>
    )
}

export default Information_bar