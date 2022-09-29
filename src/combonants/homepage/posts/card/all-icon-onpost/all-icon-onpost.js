import React, { useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Like_Post_Model from "./card2-like-model";
import Rating from '@mui/material/Rating';
import ChatIcon from '@mui/icons-material/Chat';



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
    let [likesdata,setlikesdata]=useState();
    let [showAllLikes,setshowAllLikes]=useState(false);

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



    const showLikes=()=>{
        showAllLikes==false?setshowAllLikes(true):setshowAllLikes(false)
    }



    return(
        <div className="icon-post-container">
            <ul className="like_and_shareicon">
                <li>
                    <FavoriteIcon onClick={like} datatype={postdata.postId} style={{cursor:"pointer"}}/>
                    <p  style={{cursor:"pointer"}} onClick={showLikes}>{likes!==0?likes:<></>}</p>
                    {likes!==0&&showAllLikes==true?<Like_Post_Model likesdata={likesdata}/>:<></>}
                </li>
                <li>
                    <ChatIcon/>
                    <p >{postdata.commentOnPostes?postdata.commentOnPostes.length:<></>}</p>
                </li>

            </ul>
            <div className="rating">
                <Rating name="read-only" value={postdata.rate} readOnly />
            </div>
        </div>
    )
}


export default Card_icon_post