import React from "react"
import style from "../../../../style_combonants/Style-combonants";
import Moment from 'react-moment';



const Card_Comment=({postdata})=>{

    const {commentId,text,commenterName,commenterImage,createdAt}=postdata
    return(
        <>
            <div className="comment-container-card-post">
                <img src={commenterImage} alt="" style={style.image_profole} />
                    <div className="text-container">
                        <p className="name">{commenterName}</p>
                                <p className="poster-comment-text">{text}</p>
                        <Moment fromNow className="time">{createdAt}</Moment>
                    </div>
                        
            </div>            
        </>
    )
}

export default Card_Comment