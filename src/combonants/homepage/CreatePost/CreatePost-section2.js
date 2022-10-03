import React from "react"


//Material Ui Icons
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MoodIcon from '@mui/icons-material/Mood';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import {FcOldTimeCamera} from "react-icons/fc";
import {FcHeadset} from "react-icons/fc";
import {FcPortraitMode} from "react-icons/fc"



const CreatePost_section2=({show})=>{
    //show model to create post
    const showmodel=()=>{
        show(true)
    }
    
    return(
        <>
        <ul onClick={showmodel} className="icon-section">
            <li>
                <FcHeadset style={{fontSize:"2em"}}/>
                <p>Live Video </p>
            </li>
            <li>
                <FcOldTimeCamera style={{fontSize:"2em"}}/>
                <p>Photo/Video</p>
            </li>
            <li>
                <FcPortraitMode style={{fontSize:"2em"}}/>
                <p>Feel/Mood</p>
            </li>
        </ul>

        </>
    )
}


export default CreatePost_section2