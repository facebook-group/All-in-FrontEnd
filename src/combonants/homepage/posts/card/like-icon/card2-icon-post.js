import React, { useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Like_Post_Model from "./card2-like-model";

//rete material ui 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


import axios from "axios";

import io from "socket.io-client";
const socket=io(process.env.REACT_APP_API);

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Card_icon_post=({postdata})=>{
    //get the type of the like and number of likes
    let [likes,setlikes]=useState(0)
    let [likes_color,set_likes_color]=useState('silver')
    let [likesdata,setlikesdata]=useState()

    //get all likes on these post
    useEffect(()=>{
        let data= axios.get(`${process.env.REACT_APP_API}getlike/${postdata.postId}`).then((likedata)=>{
            setlikes(likedata.data.length)
            likedata.data.forEach(({person_do_like_id})=>{
                setlikesdata(likedata.data)
                if(person_do_like_id===mydata.regusterid){
                 set_likes_color("red")
                }
            })
        })
    },[])


    const like=(e)=>{
        const person_do_like_id=mydata.regusterid;
        const post_liked_id=e.currentTarget.getAttribute("datatype");
        const person_do_like_name=mydata.fullName;
        const person_do_like_image=mydata.image;
        
        if(likes_color=="silver"){
            socket.emit("createLikePost",{person_do_like_id:person_do_like_id,post_liked_id:post_liked_id,person_do_like_name:person_do_like_name,person_do_like_image:person_do_like_image});
            set_likes_color("red")
            setlikes(++likes)
         }else{
            socket.emit("deletelike",{person_do_like_id:person_do_like_id});
            set_likes_color("silver")
            setlikes(--likes)
        }
    }



    return(
        <div className="icon-post-container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="like_and_shareicon">
                <FavoriteIcon sx={{marginRight:"8px",cursor:'pointer' ,color:likes_color}} onClick={like} datatype={postdata.postId}/>
                <p className="number-of-likes">{likes!==0?likes:<></>}</p>
                {likes!==0?<Like_Post_Model likesdata={likesdata}/>:<></>}
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        position:"absolute",
                        left:'50%',
                        transform:"translate(-50%)"
                    }}
                    >
                    <Rating name="read-only" value={postdata.rate} readOnly />
                </Box>

            </div>
            <p style={{fontWeight:"bold",cursor:"pointer"}}>{postdata.commentOnPostes?postdata.commentOnPostes.length:<></>} Comments</p>
        </div>
    )
}


export default Card_icon_post