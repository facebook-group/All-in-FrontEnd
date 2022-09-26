//Import React And Main Combonants
import React, { useState }  from "react"
import { useForm } from "react-hook-form";
import {useDispatch,useSelector} from "react-redux"

//The Decoded File
import axios from 'axios';
import jwt_decode from "jwt-decode";

//Style Section The Css file And Class Have Style
import "../signin-style/signin-style.css"
import classes from "../../signup/style-signup/materialui-signup";

//import file section 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//yup section 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router";

//Use For Validation Section 
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();



  
  
  

const SignIn=()=>{
    const dispatch=useDispatch()
    const Navi=useNavigate()

    const [wrongEmailOrPass,setwrongEmailOrPass]=useState()
    const [verificationProblem,setVerificationProblem]=useState(false)


    const verifyEmail=()=>{    
        axios.post(`${process.env.REACT_APP_API}Nodemailer`,{
            headers:{'Content-Type':'application/json;charset=utf-8'},
            body:verificationProblem
        })
        Navi("/Verification")
    }

    //Use For React Former For Validation The Information
    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});


    const Onsubmit = (data) =>{

        //Use To Decoded The Baseic Auth To Be `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
        const decoded=btoa(`${data.email}:${data.password}`)

        axios.post(`${process.env.REACT_APP_API}signin`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
          }).then((x)=>{
            //to verify the code 
                    if(x.data.varification=="You Are Not Verify") {
                        setVerificationProblem(x.data)
                        return
                    }
                 if(x.data.accessToken!="There Is Problem In SignIn"&&x.data.varificationPass!=="done"){
                    //send the accsess Token To User To Useit
                    const decoded = jwt_decode(x.data.accessToken);
                    window.localStorage.mydata=JSON.stringify(decoded);
                    window.localStorage.accessToken=JSON.stringify(x.data.accessToken);
                    window.localStorage.refreshToken=JSON.stringify(x.data.refreshToken);
                    window.location.href="/home";
                }                

            }).catch((errors)=>{
                //if The Email Or The Password ARE WRONG
                console.log(errors)
                setwrongEmailOrPass(errors.response.data)
            });
    
    }

    //To Get Signup Page Direct 
    const signup=()=>{ Navi("/signup")}
    
    return(
        <>
            <div className="signin-container-section">
                        <form onSubmit={handleSubmit(Onsubmit)} className="signup-option">

                                <TextField id="outlined-uncontrolled"  label="Email" defaultValue="example@yahoo.com" {...register("email")} sx={classes.signinstyle}   />
                                <p className="error">{errors.email?.message}</p>

                                <TextField id="outlined-uncontrolled"  label="Password"  {...register("password")} sx={classes.signinstyle} type="password"  />
                                <p className="error">{errors.password?.message}</p>
                                {verificationProblem!==false?<Button variant="outlined" color="error" sx={{marginBottom:"15px"}} onClick={verifyEmail}> Press Here To Verify</Button>:<></>}
                                <Button variant="contained" type="submit"  sx={classes.signinstyle}>Submit All</Button>
                                <Button variant="contained"  sx={classes.greenbutton} onClick={signup}>signup</Button>
                                {wrongEmailOrPass==="Error Email Or Password"?<p className="WrongEmailOrPass">{wrongEmailOrPass}</p>:<></>}

                        </form>

                <div className="image-holder">
                    <img src="https://www.lotempiolaw.com/wp-content/uploads/2018/08/Facebook-PNG-Clipart.png" alt="" />
                    <p>sign on in the face back and go to live check all massage and other vaideios posters</p>
                </div>


            </div>
        </>
    )

}


export default SignIn







//  //get refresh token and get barear
//  axios.post("http://localhost:3050/apiv1",{
//     headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`Bearer ${x.data.accessToken}` },
//     data}).then((data)=>{
//         var decoded = jwt_decode(data.data.refreshtoken);
//         window.localStorage.mydata=JSON.stringify(decoded)
//         window.location.href="/home";

//     }).catch(()=>{
//         console.log("wrong ")
//     })0