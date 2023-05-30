import "./Register.css"
import axios from "axios";
import React, {useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
const Register = () => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    branch:"",
    year:"",
    github: "",
    linkedin: "",
    webdev: false,
    appdev: false,
    ai: false,
    ml: false,
    embedded: false,
    mech: false,
    java: false,
    springboot: false,
    javascript: false,
    solidwork: false,
    autocad: false,
    othercheck: false,
    other:"",
    resume: ""
  });
  
  const [error, setError] = useState("");
  
  const handleChange = (event) => {
    
    
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState({ ...state, [name]: newValue });
    
    
    };
    

    const handleAdminLogin = () => {
      window.location = '/login';
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const url = 'http://localhost:4000/app/';
    const user = {
      firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    phone: state.phone,
    college: state.college,
    github: state.github,
    linkedin:state.linkedin,
    branch:state.branch,
    year:state.year,
    webdev: state.webdev,
    appdev: state.appdev,
    ai: state.ai,
    ml: state.ml,
    embedded: state.embedded,
    mech: state.mech,
    java: state.java,
    springboot: state.springboot,
    javascript: state.javascript,
    solidwork: state.solidwork,
    autocad: state.autocad,
    other: state.other,
    resume: state.resume
    }
    
    axios.post(url, user)
   
  .then(response => {
    console.log(response.data);

    setIsActive(true);

    window.location = '/';
    alert('Form Submitted Successfully');
    
  })
  .catch(error => {
    console.error(error);
    alert('Submission failed due to invalid credentials');
  });


    };
  
  return (
    <div className="inco">
      <div className="navbar">

    
        <img src="logogreen.svg" alt="" className="logo" />
        {/* <button  className="logbuts"  onClick={handleAdminLogin}><RiUserLine size={25}/></button> */}
        <button className="logbuts" onClick={handleAdminLogin}><AiOutlineUser size={25} className="icons"/></button>


        
      </div>
      <div className="form">
        {error && <div className="error">{error}</div>}
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
          <div className="connect">
            <div className="connHead">
            <h1>Application Form</h1>

            </div>
            <div className="connin">
            <input
              type="email"
              required
              className="userEmail"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={state.email}
            />
            <div className="name">
              <input
              className="nameText"
                type="text"
                required
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={state.firstName}
              />
              <input
                type="text"
                required
                className="nameText"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={state.lastName}
              />
            
              <input
                pattern="[0-9]{10}" 
                 title="Please enter a 10-digit phone number"
                type="tel"
                required
                placeholder="phone"
                name="phone"
                onChange={handleChange}
                value={state.phone}
              />
              <input
                type="text"
                required
                className="nameText"
                placeholder="College Name"
                name="college"
                onChange={handleChange}
                value={state.college}
              />
               <input
                type="text"
                required
                className="nameText"
                placeholder="Branch"
                name="branch"
                onChange={handleChange}
                value={state.branch}
              />
               <input
                type="number"
                required
                className="nameText"
                placeholder="Year"
                name="year"
                onChange={handleChange}
                value={state.year}
              />
            </div>
            <input
              type="url"
              placeholder="GitHub Link"
              name="github"
              onChange={handleChange}
              value={state.github}
            />
            <input
              type="url"
              required
              placeholder="LinkedIn Link"
              name="linkedin"
              onChange={handleChange}
              value={state.linkedin}
            />
            </div>
            </div>
            <div className="fields">
              <div className="fieldhead">
                <h1>Internships</h1>
              </div>

              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="webdev"
                    checked={state.webdev}
                    onChange={handleChange}
                    
                  />
                  Web Development
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="appdev"
                    checked={state.appdev}
                    onChange={handleChange}
                  />
                  App Development
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="ai"
                    checked={state.ai}
                    onChange={handleChange}
                  />
                  Artificial Intelligence
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="ml"
                    checked={state.ml}
                    onChange={handleChange}
                  />
                  Machine Learning
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="embedded"
                    checked={state.embedded}
                    onChange={handleChange}
                  />
                  Embedded Systems
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="mech"
                    checked={state.mech}
                    onChange={handleChange}
                  />
                  Mechanical 3D Modelling
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="java"
                    checked={state.java}
                    onChange={handleChange}
                  />
                  Java
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="springboot"
                    checked={state.springboot}
                    onChange={handleChange}
                  />
                  SpringBoot
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="javascript"
                    checked={state.javascript}
                    onChange={handleChange}
                  />
                  JavaScript
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="solidwork"
                    checked={state.solidwork}
                    onChange={handleChange}
                  />
                  Solid Works
                </label>
              </div>
              <div className="tick">
                <label>
                  <input
                    type="checkbox"
                    name="autocad"
                    checked={state.autocad}
                    onChange={handleChange}
                  />
                  Auto CAD
                </label>
              </div>
              

            </div> 
            


            <div className="resu">
              <h1>Upload your resume here</h1>

             
  
                  <input 
                    type="url"
                    placeholder="Resume Link"
                    name="resume"
                    onChange={handleChange}
                    value={state.resume}
                  />
              
            
            </div>
            <button id="btn"  type="submit" value='Submit' className={isActive ? "active" : "button"}>
      <p id="btnText" style={{background: "transparent"}}>{isActive ? "Thanks" : "Submit"}</p>
      <div  className={"check-box"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
    </button>
          
        </form>
      </div>
    </div>
  );
  };

export default Register;