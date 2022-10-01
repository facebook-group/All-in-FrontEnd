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
            <BottomNavigation className="selectItemBackground"  sx={{ width: 600,height:40}}  value={getvalue} onChange={handleChange}>
            <BottomNavigationAction
            className="button-color-section"
                label="Home"
                value="/home"
                icon={<CottageIcon />}
            />
            <BottomNavigationAction
            className="button-color-section"
                label="All Frind"
                value="/frind"
                icon={<GroupIcon />}
            />
            <BottomNavigationAction
            className="button-color-section"
                label="Moveis"
                value="/movies"
                icon={<Shop2Icon />}
            />
            <BottomNavigationAction
            className="button-color-section"
             label="About Me" value="/about"
              icon={<AddBusinessIcon />} />
            </BottomNavigation>
        </ul>
    )
}

export default Navbar2