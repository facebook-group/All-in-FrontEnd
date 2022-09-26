import React, { useEffect, useRef,useState } from "react"
import Card_Comment from "../comment-section/card3-comment2-section"
import style from "../../../../style_combonants/Style-combonants";
import SendIcon from '@mui/icons-material/Send';
import io from "socket.io-client"



let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const { v4: uuidv4 } = require('uuid');

//soket io section
const socket=io(process.env.REACT_APP_API)



const Card_Comment_Section=({postdata})=>{


    const [showcomme,setshowcomment]=useState(false)
    const comment_data=useRef()
    const comment=()=>{
        const commentId=uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        const text=(comment_data.current.value);
        const commentOnPostId=(comment_data.current.getAttribute("postid"));
        const commenterName=mydata.fullName;
        const commenterImage=mydata.image;

        socket.emit("create_comment",{commentId:commentId,text:text,commentOnPostId:commentOnPostId,commenterName:commenterName,commenterName:commenterName,commenterImage:commenterImage})
        comment_data.current.value=""
    }


    const showcomment=()=>{
        showcomme==true?setshowcomment(false):setshowcomment(true)
    }

    
    return(
        <>
            <div className="comment-container" style={style.flex}  >
                <img src={mydata.image} alt="" style={style.image_profole} />
                <input type="text" style={style.input_text} postid={postdata.postId} ref={comment_data}/>
                <SendIcon sx={{fontSize:"1.5em",marginLeft:"10px",cursor: "pointer"}} onClick={comment}/>
            </div>

            {showcomme==true&&postdata.commentOnPostes&&postdata.commentOnPostes.length>0? postdata.commentOnPostes.map((postdata,i)=>(
                <Card_Comment postdata={postdata} key={i} />
            ))   
            :<></>
            }
            <div className="morecomment"style={{marginLeft:"auto",marginBottom:"-10px",cursor:"pointer",marginTop:"10px"}} onClick={showcomment} >
                {showcomme==true?<p>Hide All Comment</p>:<p>Show All Comments</p>
            }</div>

        </>
    )
}

export default Card_Comment_Section