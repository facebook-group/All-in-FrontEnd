import React from 'react';
import SubjectIcon from '@mui/icons-material/Subject';
import "./style/style.scss";
import Moment from 'react-moment';
import Person_Nav_Card from './header-image-text/card1-person-information-bar';
import { useState } from 'react';


function Header_card({postdata}) {
  const {publisherImage,publisherName,createdAt}=postdata;
  const [showItem,setshowItem]=useState(false)


  const doReport=()=>{
    setshowItem(false)
  }

  const showTheItem=()=>{
    showItem==false?setshowItem(true):setshowItem(false)
  }


  return (
    <div className='header-card-conrtainer'>
        <div className='left-side'>
            <img src={publisherImage} alt="" />
            <div className='text-section'>
                <p className='name-publisher'>{publisherName}</p>
                <p className='time'><Moment fromNow ago>{createdAt}</Moment></p>
            </div>
        </div>
        <span className='right-side-button'>
            <span onClick={showTheItem}><SubjectIcon/></span>
            {showItem===true?<Person_Nav_Card  postdata={postdata} doReport={doReport}/>:<></>}
        </span>

    </div>
  )
}

export default Header_card
