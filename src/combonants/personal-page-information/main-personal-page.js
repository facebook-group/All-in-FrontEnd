import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { GetAllUserData } from "../../redux/GetAllInfromationUser"
import HerderPersonal_page_information from "./personal-page/header-personal-page";


import "./style/personalpage.scss"


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Personal_page_information=()=>{
    const dispatch=useDispatch()
    const personal_data=useSelector((state)=>(state.alluserdata.value))
    useEffect(()=>{
        dispatch(GetAllUserData())
    },[dispatch])
    


    return(
        <div className="main-page-holder">
          {personal_data!==false?<HerderPersonal_page_information personal_data={personal_data.payload.data[0]}/>:<></>}
          <ul className="element1">
          </ul>
        </div>
    )
}


export default Personal_page_information