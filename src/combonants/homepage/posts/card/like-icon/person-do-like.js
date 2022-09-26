import React from "react"
import Button from '@mui/material/Button';
import style from "../../../../style_combonants/Style-combonants";


const Person_Do_Like=({data})=>{
    const {person_do_like_id,person_do_like_image,person_do_like_name,post_liked_id}=data;

    const addfrind=(e)=>{
       const personid= e.currentTarget.getAttribute("datatype")
    }

    return(
        <div className="all-likers-holder">
        <div className="person_holder">
            <img src={person_do_like_image} alt="" style={style.image_profole} />
            <p>{person_do_like_name}</p>
        </div>

        <Button variant="contained" datatype={person_do_like_id} onClick={addfrind}>Add Frend</Button>
        </div>
    )


}


export default Person_Do_Like