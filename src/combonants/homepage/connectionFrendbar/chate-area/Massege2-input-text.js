import React, { useEffect, useRef, useState } from "react"

import SendIcon from '@mui/icons-material/Send';


//soket io section 
import io from "socket.io-client"
import axios from "axios";

import Massrg_section3 from "./Massege3-display-Massage";

const socket=io(process.env.REACT_APP_API)


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


// {massanger} is statues of the massenger open or close if open will get all id
const Massage2_section=({massanger})=>{
    const [allmassage,setallmassage]=useState()
    const [acceptmassage,setacceptmassage]=useState()
    const massage_Filed=useRef();



    //get the all massage of these chat room
    useEffect(()=>{
        let data=axios.get(`${process.env.REACT_APP_API}allmasages/${massanger.chatId}`).then((data)=>{
            setallmassage(data.data)
        })
    },[])

    useEffect(()=>{
        //join to the privet room section 
        //soooooooooo important infrmation most the room spame place with the socket get
        socket.emit("private-massage-room",{regusterid:mydata.regusterid})
        socket.on("accept-privet-massage",(data)=>{
            setallmassage(prevArray => [...prevArray, data])
            socket.emit("stateofchat",{chatId:data.chatId,regusterid:data.myfrindid})
        })
        socket.on("statusofmassage",(statusofmassage)=>{
            setacceptmassage(true)
        })    



    },[socket])



    //click send massege event section 
    const send_massage=()=>{
        //get the text
        let text=massage_Filed.current.value;
        //set all data of the massage
        let alldata={text:text,chatId:massanger.chatId,frindid:massanger.frindid,fullName:massanger.fullName,image:mydata.image,myfrindid:massanger.myfrindid}  
        //post all privet massage
        socket.emit("privet-massage",alldata)    
        //empty filled after send the massage
        massage_Filed.current.value=""
        setallmassage(prevArray => [...prevArray, alldata])
    }




    return(
        <>
            <Massrg_section3 allmassage={allmassage}  />
            <div className="input-section">
                  <SendIcon className="icon" onClick={send_massage}/>
                  <textarea type="text"  ref={massage_Filed} className="input-button" placeholder="Text here ....."/>
            </div>

        </>
    )
}

export default Massage2_section