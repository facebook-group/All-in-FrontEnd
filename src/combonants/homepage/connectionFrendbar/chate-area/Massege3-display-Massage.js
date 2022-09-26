import React, { useEffect, useRef } from "react";
import Moment from 'react-moment';
import style from "../../../style_combonants/Style-combonants";



let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Massrg_section3=({allmassage})=>{
    //use to scroll outomatic to buttom by refreance to elment in the bottom 
    const lastthing=useRef()
    useEffect(()=>{
        lastthing.current?.scrollIntoView();
    },[allmassage])
    return(
        <>
            <div className="massage-container"  >
                {allmassage!==undefined?allmassage.map(({createdAt,frindid,fullName,image,myfrindid,text},i)=>{
                    if(mydata.regusterid==frindid){
                        return (                  
                                <div className="sender" key={i}>
                                    <p className="time-section"><Moment fromNow>{createdAt}</Moment></p>
                                        <div className="text">
                                            <img src={image} alt="" style={style.image_profole} />
                                            <p className="massenger-text">{text}</p>
                                        </div>
                                        <p ref={lastthing}></p>
                                </div>)
                    }else{
                        return (                  
                            <div className="sender forme" key={i}>
                                <p className="time-section"><Moment fromNow>{createdAt}</Moment></p>
                                    <div className="text">
                                        <p className="massenger-text">{text}</p>
                                        <img src={image} alt="" style={style.image_profole} />
                                    </div>
                                    <p ref={lastthing}></p>
                            </div>)

                    }
                 })
                :<></>}
            </div>

        </>
    )
}


export default Massrg_section3