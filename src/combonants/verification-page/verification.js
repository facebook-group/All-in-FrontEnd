import React, { useRef, useState } from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import axios from "axios"
import { useNavigate } from "react-router";

const Verification=()=>{
    const [wrongverecation,setWrongverication]=useState(false)
    const Passwordref=useRef()
    const Navi=useNavigate()
    const [state,setValue]=useState()
    const verify=(e)=>{
        e.preventDefault()
        let verification=`${(Passwordref.current.textvallue1.value)}${(Passwordref.current.textvallue2.value)}${(Passwordref.current.textvallue3.value)}${(Passwordref.current.textvallue4.value)}`
        let email=state
        axios.post(`${process.env.REACT_APP_API}validationcheck`,{
            headers:{'Content-Type':'application/json;charset=utf-8'},
            body:{verification:verification,email:email}
        }).then((data)=>{
            if(data.data=="wrong verify"){
                setWrongverication(true)
            }
            else{
                Navi("/")
            }
        })



    }
    return(
        <>
        <Styled_Verificayion>
        <div id="wrapper">
            <div id="dialog">
                <button className="close" style={{cursor:"pointer"}}>x</button>
                <h3>Please enter the 4-digit verification code we sent via Email:</h3>
                <span>(we want to make sure it's you before we contact our movers)</span>
                <TextField label="Email" color="secondary" focused  sx={{marginTop:"15px"}}onChange={(e) => setValue(e.target.value)}/>
                <form id="form" ref={Passwordref}>
                    <input type="text" name="textvallue1"/>
                    <input type="text" name="textvallue2"/>
                    <input type="text" name="textvallue3"/>
                    <input type="text" name="textvallue4"/>
                    <button className="btn btn-primary btn-embossed verufy-btn" onClick={verify}>Verify</button>
                </form>
                
                <div>
                Didn't receive the code?<br />
                <a className="send-agin" >Send code again</a><br />
                </div>
            </div>
        </div>
        {wrongverecation==true?       
         <div className="wrong-verification" >
            <p>wrong verification</p>
        </div>:<></>
        }
        </Styled_Verificayion>
        </>
    )
}


export default Verification



const Styled_Verificayion=styled.div`
#wrapper {
    font-family: Lato;
    font-size: 1.5rem;
    text-align: center;
    box-sizing: border-box;
    color: #333;
    
    #dialog {
      border: solid 1px #ccc;
      margin: 10px auto;
      padding: 20px 30px;
      display: inline-block;
      box-shadow: 0 0 4px #ccc;
      background-color: #FAF8F8;
      overflow: hidden;
      position: relative;
      max-width: 450px;
      
      h3 {
        margin: 0 0 10px;
        padding: 0;
        line-height: 1.25;
      }
      
      span {
        font-size: 90%;
      }
      
      #form {
        max-width: 240px;
        margin: 25px auto 0;
        
        input {
          margin: 0 5px;
          text-align: center;
          line-height: 80px;
          font-size: 50px;
          border: solid 1px #ccc;
          box-shadow: 0 0 5px #ccc inset;
          outline: none;
          width: 20%;
          transition: all .2s ease-in-out;
          border-radius: 3px;
          
          &:focus {
            border-color: purple;
            box-shadow: 0 0 5px purple inset;
          }
          
          &::selection {
            background: transparent;
          }
        }
        button {
          margin:  30px 0 50px;
          width: 100%;
          padding: 6px;
          background-color: #B85FC6;
          border: none;
          text-transform: uppercase;
        }
      }
      .verufy-btn {
        cursor: pointer;
      }
      .send-agin {
        cursor: pointer;
        color: rgb(81, 81, 253);
        margin-top:20px;
    
    }

      
      button {
        &.close {
          border: solid 2px;
          border-radius: 30px;
          line-height: 19px;
          font-size: 120%;
          width: 22px;
          position: absolute;
          right: 5px;
          top: 5px;
        }           
      }
      
      div {
        position: relative;
        z-index: 1;
      }
      
      img {
        position: absolute;
        bottom: -70px;
        right: -63px;
      }
    }
    
  }

  .wrong-verification {
    color: white;width: 150px;height: 50px;position: absolute;top: 107%;left: 50%;
    transform: translate(-50%,-50%);border-radius: 20px;
    background-color: red;textAlign:"center";
    text-align: center;padding: 10px;



    
  }

`