import React from "react"
import { useNavigate } from "react-router";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublicIcon from '@mui/icons-material/Public';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


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
          <p className="personName">{fullName}</p>
          <ul className="collection-text">
            <li>
              <span><AlternateEmailIcon/> </span>
              <p> Email User : {email}</p>
            </li>
            <li>
              <span><GTranslateIcon/> </span>
              <p> language speak : {languageSpeak}</p>
            </li>
            <li>
              <span><PhoneAndroidIcon/> </span>
              <p> Phone Number : {phoneNumber}</p>
            </li>
            <li>
              <span><PublicIcon/> </span>
              <p> country Place : {place}</p>
            </li>
            <li>
              <span><LocalLibraryIcon/> </span>
              <p> Study : {study}</p>
            </li>
          </ul>
          <button className="button-section" onClick={editePersonal}>
            Edite Personal Information
          </button>
        </div>
    )
}


export default HerderPersonal_page_information

