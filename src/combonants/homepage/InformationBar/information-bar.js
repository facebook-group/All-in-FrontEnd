import React from "react"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import './style.css'


import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CottageIcon from '@mui/icons-material/Cottage';
import { useNavigate } from "react-router";

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}




const Information_bar=()=>{
    const Navi=useNavigate()

    const gotobage=(e)=>{
        Navi(e.currentTarget.classList[0])
    }



    return (
      <div className='information-bar-container'>
        <ul className='informationbar'>
          <li className="myPage">
            <img src={mydata.image} className='test'/>
            <p className="myName">{mydata.fullName}</p>
          </li>
          <li onClick={gotobage} className='home'>
            <button class='custom-btn btn-12'>
              <span>Home Page</span>
              <span>
                <CottageIcon className='icon' />
              </span>
            </button>
          </li>
          <li onClick={gotobage} className='/frind'>
            <button class='custom-btn btn-12'>
              <span>All User</span>
              <span>
                <AccountBoxIcon className='icon' />
              </span>
            </button>
          </li>
          <li onClick={gotobage} className='/myfrend'>
            <button class='custom-btn btn-12'>
              <span>My Frind</span>
              <span>
                <GroupIcon className='icon' />
              </span>
            </button>
          </li>
          <li onClick={gotobage} className='/frendrequest'>
            <button class='custom-btn btn-12'>
              <span>Frind Request</span>
              <span>
                <PersonAddAlt1Icon className='icon' />
              </span>
            </button>
          </li>
          <li onClick={gotobage}>
            <button class='custom-btn btn-12'>
              <span>Warch</span>
              <span>
                <OndemandVideoIcon className='icon' />
              </span>
            </button>
          </li>
        </ul>
      </div>
    )
}

export default Information_bar