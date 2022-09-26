import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { GetAllUserData } from "../../redux/GetAllInfromationUser"

import "./style/personalpage.css"



import HerderPersonal_page_information from "./personal-page/header-personal-page"
import Edite_personal_page from "./personal-page/edite-personal-page"
import Mypostes_personal from "./personal-page/mypostes-personal"
import Myfrind_Personal from "./personal-page/myfrind-personal"

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
            <li>
                {personal_data!==false?<Edite_personal_page personal_data={personal_data.payload.data[0]}/>:<></>}
                {personal_data!==false?<Myfrind_Personal personal_data={personal_data.payload.data[0].frinds}/>:<></>}
            </li>
            <li>
                {personal_data!==false?<Mypostes_personal personal_data={personal_data.payload.data[0].posts}/>:<></>}

            </li>
          </ul>
        </div>
    )
}


export default Personal_page_information