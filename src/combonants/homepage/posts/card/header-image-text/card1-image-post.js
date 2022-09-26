import React from "react"
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';


const Card_image_post=({postdata})=>{
    return(
        <>
            <CardOverflow>
            <AspectRatio>
                {postdata.image!==""?  <img src={postdata.image} alt="" />:<></>}
            </AspectRatio>
            </CardOverflow>
        </>
    )
}


export default Card_image_post