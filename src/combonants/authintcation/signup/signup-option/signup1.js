import React, { useEffect, useState }  from "react"
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


//import file section 
import SignupCountry from "./signup3-country";
import SignupPhoto from "./signup-photo";
import classes from "../style-signup/materialui-signup"; 


//yup section 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


//material ui section 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router";



//shema to define the propert of the input
const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

//
const  SignUp1=(prototype)=> {
const Navi=useNavigate()
const id=uuidv4();//use to create random id
const [country,setcountry]=useState("")
const [uploadImage,setUploadImage]=useState()
//use to show the error 
const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});




//get the value of country from the chiled  using callback from signup-country
  const countrydata=(data)=>{
    setcountry(data.country)
  }
//get the value of country from the chiled  using callback from sognup-photo
  const photodata=(getdata)=>{
    setUploadImage(getdata)
  }


  //data will send to the database
  const Onsubmit = (data) =>{
    const {fullname,email,password}=data;
    const Random4digit = Math.floor(1000 + Math.random() * 9000);

    const alldata={
      regusterid:id,
      fullName:fullname,
      email:email,
      password:password
      ,place:country,
      uploadImage:uploadImage,
      verification:Random4digit
    }

     axios.post(`${process.env.REACT_APP_API}signup`,{
        headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'      },
        alldata
      }).then().then((x)=>{
      if(x.data.status=="Email Is ok"){
        Navi("/")
      }else if(x.data.status=="Email Is Taken"){
       (prototype.data(true))
      }
    })
  }  


  //show the image i will useing



  return (
  
      <form onSubmit={handleSubmit(Onsubmit)} className="signup-option">
      <TextField id="outlined-uncontrolled"  label="FullName" {...register("fullname")}  sx={classes.textfiled}/>
      <p className="error">{errors.fullname?.message}</p>

      <TextField id="outlined-uncontrolled"  label="Email" defaultValue="example@yahoo.com" {...register("email")} sx={classes.textfiled}  />
      <p className="error">{errors.email?.message}</p>
      
      <TextField id="outlined-uncontrolled"  label="Password"  {...register("password")} sx={classes.textfiled}  type="password" />
      <p className="error">{errors.password?.message}</p>
      <SignupCountry data={countrydata}/>
      <SignupPhoto data={photodata} />
      <Button variant="contained" type="submit" sx={classes.textfiled}>Submit All</Button>
    </form>

  );
}



export default SignUp1