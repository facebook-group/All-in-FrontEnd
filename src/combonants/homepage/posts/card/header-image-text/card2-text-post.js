import React from "react"


const CardText=({postdata})=>{
    return(
        <>
        <p  className="post-text" >{postdata.text}</p>
        </>
    )
}

export  default CardText