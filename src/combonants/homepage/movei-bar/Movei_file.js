import React from 'react';
import "./style/style.scss"


let data=[{img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",name:"lith"},
{img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",name:"lith"},
{img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",name:"lith"},
{img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",name:"lith"},
{img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",name:"lith"}]


function Movei_file() {
  return (
    <div className='movei-container-section'>
        {data.map((a,i)=>(
                    <div className='movei-container' key={i}>
                        <img src={a.img} alt="" />
                    </div>        
               ))
        }
    </div>
  )
}

export default Movei_file
