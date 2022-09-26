import React, { useState } from "react"


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import classes from "../style-signup/materialui-signup";
import axios from "axios";

const Input = styled('input')({
  display: 'none',
});


const SignupPhoto=({data})=>{
    const [showImage,setShowImage]=useState()


    const getImage_file=async(e)=>{
        //get the file i will uolodad
        let file=e.target.files[0]

        //create new Form data to can upload on cloudaniry
        const formData = new FormData();

        formData.append("file",file);
        //Upload presets {"lobdevu9"} from cloudinary for unsiged name 
        formData.append('upload_preset', 'lobdevu9');
        
        //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
       const uploadOnClodinary=await axios.post("https://api.cloudinary.com/v1_1/dhcqosl5z/upload",formData).then((alldata)=>{
        setShowImage(alldata.data.secure_url)

        //send the value for perant
        data(alldata.data.secure_url)
       })

    }    

   
    return(
        <>
            <Stack direction="row" alignItems="center" spacing={2} sx={classes.imagecontainer}>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={getImage_file} />
                    <Button variant="contained" component="span" sx={classes.bottomphone} >
                    Upload
                    </Button>
                </label>
                {showImage!==undefined?<img src={showImage} className="show-image-profile"  />:<></>}
                
            </Stack>

        </>
    )
}


export default SignupPhoto