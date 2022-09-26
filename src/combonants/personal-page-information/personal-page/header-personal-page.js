import React from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";


const HerderPersonal_page_information=({personal_data})=>{
    const Navi=useNavigate()
    const editeInformation=()=>{
        Navi("/editeInformation")
    }

    return(
        <>
        <div className="header-personal-container">
                <div className="personal-infor">
                  <img src={personal_data.image} alt="" />
                  <div>
                      <p>{personal_data.fullName}</p>
                      <p>{personal_data.frinds.length}frinds</p>
                  </div>
                </div>

                <div className="edit-my-profile">
                        <Button variant="contained" sx={{marginRight:"15px"}}>add your story</Button>
                        <Button variant="outlined" onClick={editeInformation}>Edit your profile</Button>
                </div>
          </div>
         </>
    )
}


export default HerderPersonal_page_information