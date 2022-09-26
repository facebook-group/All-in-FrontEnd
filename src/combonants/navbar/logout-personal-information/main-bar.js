import React from "react";

import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Logout_button from "./logout-button";
import Personal_information_go from "./personal-information-go";




const Main_bar_personal_information_logout=()=>{
    return(
        <div className="personal-informatio-logout">
            <Personal_information_go/>

            <div className="other-selection-bar">
                <ul className="icon-other-selectiopn">
                    <li>
                        <SettingsIcon/>
                        <p>Settings and privacy</p>
                    </li>
                    <li>
                        <HelpIcon/>
                        <p>Help and support</p>
                    </li>
                    <li>
                        <MonetizationOnIcon/>
                        <p>Display and access</p>
                    </li>
                    
                    <Logout_button/>
                   
                </ul>
            </div>

        </div>
    )
}


export default Main_bar_personal_information_logout