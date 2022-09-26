import React from "react"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';



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



    return(
        <div className="information-bar-container">
            <ul className="informationbar">
                <li >
                    <img src={mydata.image} />
                    <p>{mydata.fullName}</p>
                </li>
                <li onClick={gotobage} className="/home">
                    <CottageIcon className="icon"/>
                    <p>Home Page</p>
                </li>
                <li onClick={gotobage} className="/frind">
                    <AccountBoxIcon  className="icon"/>
                    <p>All User </p>
                </li>
                <li onClick={gotobage} className="/myfrend">
                    <GroupIcon  className="icon" />
                    <p>My Frind</p>
                </li>
                <li onClick={gotobage} className="/frendrequest">
                    <PersonAddAlt1Icon  className="icon"/>
                    <p>Frind Request</p>
                </li>
                <li onClick={gotobage}>
                    <RemoveShoppingCartIcon  className="icon"/>
                    <p>MarketPlace</p>
                </li>
                <li onClick={gotobage}>
                    <OndemandVideoIcon className="icon"/>
                    <p>Warch</p>
                </li>
                <li>
                    <AnnouncementIcon className="icon" />
                    <p>Notes</p>
                </li>
                <li onClick={gotobage}>
                    <NightlifeIcon  className="icon"/>
                    <p>Vcation</p>
                </li>
                <li onClick={gotobage}>
                    <HolidayVillageIcon  className="icon"/>
                    <p>More</p>
                </li>



            </ul>

        </div>
    )
}

export default Information_bar