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
       

<div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
    <img src={personal_data.image} alt="" />
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name"><p>{personal_data.fullName}</p></div>
      <div class="profile-card__txt">{personal_data.study} from <strong>{personal_data.place}</strong></div>
      <div class="profile-card-loc">
        <span class="profile-card-loc__icon">
          <svg class="icon"></svg>
        </span>
    

        <span class="profile-card-loc__txt">
        <p>{personal_data.email}</p>
        </span>

        

       
      </div>

      <div class="profile-card-loc">
      <span class="profile-card-loc__txt">
        <p>{personal_data.phoneNumber}</p>
        </span>
      </div>

   

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{personal_data.frinds.length}</div>
          <div class="profile-card-inf__txt">Friends</div>
        </div>

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">12</div>
          <div class="profile-card-inf__txt">Posts</div>
        </div>

 

        
      <div class="profile-card-ctr">
        <a class="profile-card__button button--blue js-message-btn" href ="http://localhost:3000/home">Home</a>
       <a class="profile-card__button button--orange" href="http://localhost:3000/editeInformation">Edit</a>
      </div>
    </div>

    <div class="profile-card-message js-message">
      <form class="profile-card-form">
        <div class="profile-card-form__container">
          <textarea placeholder="Say something..."></textarea>
        </div>

        <div class="profile-card-form__bottom">
          <button class="profile-card__button button--blue js-message-close">
            Send
          </button>

          <button class="profile-card__button button--gray js-message-close">
            Cancel
          </button>
        </div>
      </form>

      <div class="profile-card__overlay js-message-close"></div>
    </div>

  </div>

</div>


         </>
    )
}


export default HerderPersonal_page_information

