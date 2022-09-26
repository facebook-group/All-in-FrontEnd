import React, { useEffect, useRef, useState } from "react";
import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import Shop2Icon from '@mui/icons-material/Shop2';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router";



const Navbar2=()=>{
    const Navi=useNavigate()
    const [getvalue, setthevalue] = React.useState('/home');
    const handleChange = (event, newValue) => {
      setthevalue(newValue);
      Navi(newValue)
    };

    return(
        <ul className="selectdataneed" >
            <BottomNavigation sx={{ width: 500 }} value={getvalue} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="/home"
                icon={<CottageIcon />}
            />
            <BottomNavigationAction
                label="All Frind"
                value="/frind"
                icon={<GroupIcon />}
            />
            <BottomNavigationAction
                label="Store"
                value="/store"
                icon={<Shop2Icon />}
            />
            <BottomNavigationAction label="My Shope" value="/myshop" icon={<AddBusinessIcon />} />
            </BottomNavigation>
        </ul>
    )
}

export default Navbar2