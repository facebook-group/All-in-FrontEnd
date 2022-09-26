import React, { useEffect } from "react"
import axios from "axios";


//material ui section 
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';

//all style css file
import style from "../../../style_combonants/Style-combonants";

import Massage2_section from "./Massege2-input-text"
import Vedio_Call from "./Massege4-vedio-call";




let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Masseges_section=({massanger,statemassenger,chate_status_open_or_close})=>{

    useEffect(()=>{
        let data=axios.get(`${process.env.REACT_APP_API}user/${mydata.regusterid}`)
    },[])

    const closse_massenger=()=>{
        statemassenger(false)
    }

    return(
        <>
            {massanger!==false?

            <div className="massanger">
                <div className="header-massanger">
                    <ul className="icon-section">
                        <li onClick={closse_massenger}><CloseIcon/></li>
                        <li><Vedio_Call massanger={massanger}/></li>
                        <li><CallIcon/></li>
                    </ul>
                    <div className="name-section">
                        <p>{massanger.fullName}</p>
                        <img src={massanger.image} alt="" style={style.image_profole} />
                    </div>

                </div>

                <Massage2_section massanger={massanger} chate_status_open_or_close={chate_status_open_or_close}/>

            </div>

              :<></>}
        </>
    )
}


export default Masseges_section