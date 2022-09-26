import Raect from "react"
import { useNavigate } from "react-router"
import {useDispatch} from "react-redux"
import { GetAllUserData } from "../../../redux/GetAllInfromationUser" 

const Myfrind_Personal=({personal_data})=>{
    const Navi=useNavigate()
    const dispatch=useDispatch()


    const allfrinds=()=>{
        Navi("/myfrend")
    }

    const gotoperson=(data)=>{
        let idperson=(data.currentTarget.getAttribute("datatype"))
        dispatch(GetAllUserData(idperson))
    }

    return(
        <>
        {personal_data.map(({fullName,image,myfrindid},i)=>(
            <div className="myfrindss-container-section" key={i}>
                <div className="myfrind-header">
                    <div className="text">
                        <p>MyFrind</p>
                        <p className="number-frinds">{personal_data.length} Frends</p>
                    </div>
                    <p className="show-all-frind" onClick={allfrinds}>show all frind</p>
                </div>

                <div className="card-myfrind-container">
                    <div className="iconss" datatype={myfrindid} onClick={gotoperson}>
                        <img src={image}alt="" />
                        <p>{fullName}</p>
                    </div>
                </div>
            </div>
         ))
        }
        </>
    )
}


export default Myfrind_Personal