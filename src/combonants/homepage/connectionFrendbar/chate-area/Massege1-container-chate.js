import React, { useEffect } from "react"
import axios from "axios";


//material ui section 
import CloseIcon from '@mui/icons-material/Close';
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
                    <div className="name-section">
                        <img src={massanger.image} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}} />
                        <p style={{marginBottom:"5px",marginLeft:"5px"}}>{massanger.fullName}</p>
                    </div>
                    <ul className="icon-section">
                        <li><Vedio_Call massanger={massanger}/></li>
                        <li onClick={closse_massenger}><CloseIcon style={{color:"red"}}/></li>
                    </ul>

                </div>

                <Massage2_section massanger={massanger} chate_status_open_or_close={chate_status_open_or_close}/>

            </div>

              :<></>}
        </>
    )
}


export default Masseges_section