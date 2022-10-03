import axios from "axios";
import React, { useEffect } from "react"
import { useState } from "react";
import { useContext } from "react";
import { RegusterId_Create_Context } from "../context-api/personal-page";
import Card_Post from "../homepage/posts/card/card";
import HerderPersonal_page_information from "./personal-page/header-personal-page";


import "./style/personalpage.scss"


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Personal_page_information=()=>{

    const MainPageContext=useContext(RegusterId_Create_Context)
    const [DataUse,setDataUse]=useState(false)


    useEffect(()=>{
         axios.get(`${process.env.REACT_APP_API}user/${MainPageContext.RegusterId}`).then((data)=>{
            setDataUse(data.data[0])
         })
    },[])

    console.log(DataUse)

    return(
        <div className="main-page-holder">
          {DataUse!==false?<HerderPersonal_page_information personal_data={DataUse}/>:<></>}
          <ul className="Mypostes-section">
                {DataUse!==false?DataUse.posts.map((data,i)=>(
                    <Card_Post postdata={data} key={i}/>
                )):<></>}
          </ul>
        </div>
    )
}


export default Personal_page_information