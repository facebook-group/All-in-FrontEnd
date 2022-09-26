import React from "react"


//Material Ui Icons
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MoodIcon from '@mui/icons-material/Mood';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



const CreatePost_section2=({show})=>{
    //show model to create post
    const showmodel=()=>{
        show(true)
    }
    
    return(
        <>
        <ul onClick={showmodel} className="icon-section">
            <li>
                <VideoCameraFrontIcon sx={{color:"red" ,fontSize:"1.8em"}}/>
                <p>Live Vedio </p>
            </li>
            <li>
                <AddAPhotoIcon sx={{color:"green" ,fontSize:"1.8em"}}/>
                <p>Photo/Vedio</p>
            </li>
            <li>
                <MoodIcon sx={{color:"yellow",fontSize:"1.8em"}}/>
                <p>Feel/Mood</p>
            </li>
        </ul>

        </>
    )
}


export default CreatePost_section2