import React, { useRef } from "react"

const Edote_Work_IInformation=()=>{

    return(
        <>
        <label>Role:</label>
                <input type="radio" id="writer" value="writer" name="user_job" /><label className="light" style={{marginRight:"20px"}}>writer</label>
                <input type="radio" id="editor" value="editor" name="user_job"/><label className="light"   style={{marginRight:"20px"}}>Editor</label>
                <input type="radio" id="user" value="user" name="user_job"/><label className="light"   style={{marginRight:"20px"}}>User</label>

        <label>language Speak</label>
                <input type="radio" id="development" value="Arabic" name="languageSpeak" /><label className="light" style={{marginRight:"20px"}}>Arabic</label>
                <input type="radio" id="design" value="English" name="languageSpeak"/><label className="light"   style={{marginRight:"20px"}}>English</label>
                <input type="radio" id="business" value="Franch" name="languageSpeak"/><label className="light"  style={{marginRight:"20px"}}>Franch</label>


        <label >Country:</label>
        <input type="text" id="place" name="place"/>


            <label >Study:</label>
            <select id="job" name="study">
                <optgroup label="Web">
                <option value="frontend_developer">Front-End Developer</option>
                <option value="php_developer">PHP Developer</option>
                <option value="python_developer">Python Developer</option>
                <option value="rails_developer">Rails Developer</option>
                <option value="web_designer">Web Designer</option>
                <option value="wordpress_developer">Wordpress Developer</option>
                </optgroup>
                <optgroup label="Mobile">
                <option value="android_developer">Android Developer</option>
                <option value="ios_developer">IOS Developer</option>
                <option value="mobile_designer">Mobile Designer</option>
                </optgroup>
                <optgroup label="Business">
                <option value="business_owner">Business Owner</option>
                <option value="freelancer">Freelancer</option>
                </optgroup>
            </select>


            <label>Social Situation</label>
            <input type="radio" id="under_13" value="marid" name="socialSituation"/><label  className="light"  style={{marginRight:"20px"}}>Marrid</label>
            <input type="radio" id="over_13" value="single" name="socialSituation"/><label  className="light"  style={{marginRight:"20px",marginBottom:"20px"}}>Single</label>


                        

        </>
    )
}


export default Edote_Work_IInformation