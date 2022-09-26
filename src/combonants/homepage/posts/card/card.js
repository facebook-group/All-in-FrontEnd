import React from "react"

//material ui import section
import Card from '@mui/joy/Card';

//import combonanats
import Card_Person_information from "./header-image-text/card1-person-information";
import Card_image_post from "./header-image-text/card1-image-post";
import Card_icon_post from "./like-icon/card2-icon-post";
import CardText from "./header-image-text/card2-text-post";
import Card_Comment_Section from "./comment-section/card3-comment-section";




const Card_Post=({postdata})=>{
    return(
        <Card sx={{backgroundColor:"white" ,marginBottom:"10px"}}>
          <Card_Person_information postdata={postdata}/>
            <Card_image_post  postdata={postdata}/>
              <Card_icon_post  postdata={postdata}/>
            <CardText  postdata={postdata}/>
            <Card_Comment_Section  postdata={postdata}/>
      </Card>
      )
}

export default Card_Post