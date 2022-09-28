import React, { useEffect, useState } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"



//Authntication Import Combonants
import SignUp from "./combonants/authintcation/signup/sign1-main";
import SignIn from "./combonants/authintcation/signin/signin-main/signin-main";
import Navbar from "./combonants/navbar/navbar/navbar";
import FrendNavbar from "./combonants/navbar/frendNavbar/frendNavbar";


//Frend Import  Combonants
import AllFrind from "./combonants/frind/Frend1-AllUser/allfrind";
import FrendRequest from "./combonants/frind/Frend2-FrendRequest/frendrequest";
import MyFrend from "./combonants/frind/Frend3-MyFrind/myfrend";


//Home Section 
import HomePage from "./combonants/homepage/homepage";
import Vedio_call_main from "./combonants/vedio_call/vedio_call_main";


//other 
import Vedio_Caall_Page from "./combonants/vedio_call/vedio-call-page/vedio-call-page";
import Personal_page_information from "./combonants/personal-page-information/main-personal-page";
import Edite_personal_information from "./combonants/personal-page-information/edite-personal-information/edite-personal-information";



//store using like collecter f the all information 
import { store } from "./redux/store/store";
//provider using to share the data with all combonants
import { Provider } from 'react-redux'
import Verification from "./combonants/verification-page/verification";
import VedioCallPage from "./combonants/vedio-call-page/vedio-call-page";
import Page_Not_Found from "./combonants/page-not-found/Page_Not_Found";


const App=()=>{
  return(
    <>
      <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<SignIn />} />
                    <Route path="/home"  element={<>  <Navbar/>  <HomePage/>  <Vedio_call_main/> </>} />
                          <Route path="/frind"  element={<>  <Navbar  /> <FrendNavbar/> <AllFrind/>   <Vedio_call_main/> </>} />
                          <Route path="/frendrequest"    element={<>  <Navbar  /> <FrendNavbar/> <FrendRequest/>  <Vedio_call_main/></>}/>
                          <Route path="/myfrend"    element={<> <Navbar  /> <FrendNavbar/> <MyFrend/>  <Vedio_call_main/></>}/>
                          <Route path="/personalPage" element={<><Navbar  /> <Personal_page_information/> </> }/>
                          <Route path="/editeInformation" element={<><Navbar /> <Edite_personal_information/></>}/>
                          <Route path="/Verification" element={<Verification/>}/>
                          <Route path="/vediocallpage" element={<VedioCallPage/>}/>
                          <Route path="*" element={<Page_Not_Found/>}/>
              </Routes>
            </BrowserRouter>
      </Provider>
    </>
  )
}

export default App 