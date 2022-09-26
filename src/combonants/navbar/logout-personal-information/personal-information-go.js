import React from "react"
import { useNavigate } from "react-router"

import style from "../../style_combonants/Style-combonants"

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Personal_information_go=()=>{
    const Navi=useNavigate()
    const go_personal=()=>{
        Navi("/personalPage")
    }

    return(
    <div className="personal-information">
        <div className="icon1">
            <img src={mydata.image} alt="" style={style.image_profole} />
            <p>{mydata.fullName}</p>
        </div>
        <p className="show-persnal" onClick={go_personal}>show all personal information</p>
    </div>
)
}


export default Personal_information_go