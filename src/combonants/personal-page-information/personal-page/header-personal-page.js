import React from "react"
import { useNavigate } from "react-router";



import GTranslateIcon from '@mui/icons-material/GTranslate';
import {FcBusinessman} from "react-icons/fc";
import {FcAddressBook} from "react-icons/fc";
import {FcPhoneAndroid} from "react-icons/fc";
import {FcGlobe} from "react-icons/fc";
import {FcEditImage} from "react-icons/fc"


const HerderPersonal_page_information=({personal_data})=>{
  const {image,fullName,email,languageSpeak,phoneNumber,place,study}=personal_data
  const Navi=useNavigate();

  const editePersonal=(e)=>{
    e.preventDefault();
    Navi("/editeInformation")
  }

    return(
        <div className="personal-page-container">
          <img src={image} alt=""  className="personalImage"/>
          <ul className="collection-text">
            <li>
              <div>
                <span><FcBusinessman style={{fontSize:"1.5em"}}/> </span>
                <p> Full Name : {fullName}</p>
              </div>
              <div>
                <span><FcAddressBook style={{fontSize:"1.5em"}}/> </span>
                <p> Email User : {email}</p>
              </div>
              <div>
                <span><GTranslateIcon style={{fontSize:"1.5em"}}/> </span>
                <p> language speak : {languageSpeak}</p>
              </div>
            </li>
            <li>
              <div>
                <span><FcPhoneAndroid style={{fontSize:"1.5em"}}/> </span>
                <p> Phone Number : {phoneNumber}</p>
              </div>
              <div>
                <span><FcGlobe style={{fontSize:"1.5em"}}/> </span>
                <p> country Place : {place}</p>
              </div>
              <div>
                <span><FcEditImage style={{fontSize:"1.5em"}}/> </span>
                <p> Study : {study}</p>
              </div>
            </li>
          </ul>
          <button className="button-section" onClick={editePersonal}>
            Edite Personal Information
          </button>
        </div>
    )
}


export default HerderPersonal_page_information

