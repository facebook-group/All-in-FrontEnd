import React, { useState } from "react"


import Avatar from '@mui/joy/Avatar';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Moment from 'react-moment';
import Person_Nav_Card from "./card1-person-information-bar";




const Card_Person_information=({postdata})=>{
  const[showbar,setshowbar]=useState(false)

  const statuspost=()=>{
    showbar==false?    setshowbar(true): setshowbar(false)
  }
  const doReport=()=>{
    setshowbar(false)
  }

    return(
        <>
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
          <Box>
            <Avatar
              size="sm"
              src={postdata.publisherImage}
              sx={{ width:"50px",height:"50px"}}
            />
          </Box>
          <Typography fontWeight="lg">{postdata.publisherName}</Typography>
          <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }} onClick={statuspost}>
            <MoreHoriz />
          </IconButton>
          {showbar!==false?<Person_Nav_Card  postdata={postdata} doReport={doReport}/>:<></>}
        </Box>
        <Moment fromNow style={{marginBottom:"5px",marginTop:"-10px",textTransform:"capitalize"}}>{postdata.createdAt}</Moment>

        </>
    )
}





export default Card_Person_information