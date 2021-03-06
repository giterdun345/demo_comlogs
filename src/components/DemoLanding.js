import React from "react";
import { Link } from "react-router-dom";
import img from "./images/heart.jpg"

const DemoLanding = () => {
  return (
      <div className = "container">  
      <div  className="jumbotron jumbotron-billboard mt-5 " >
        <h1 className="text-center font-familyA">Counsellor's Communication Logs</h1>
        <img src={img} className="img-fluid rounded mx-auto d-block border border-dark mb-4" alt="" />
        <p className="text-center font-familyB mb-3" style={{margin:"0 10em 0 10em"}}>
          This is only a demo version, due to sensitivity of the data, data is not stored and authorization has been removed.
          <br/>Click the buttons to see an example of the user dashboard or the admin dashboard.
        </p>
        <div className="text-center">
          <Link to="/userDashboard" className="btn btn-primary btn-xl pr-4 pl-4" style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>
            User
          </Link>
          <Link to="/adminDashboard" className="btn btn-primary ml-5 btn-xl pr-4 pl-4" style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>
            Admin
          </Link>
        </div>
      </div>
    </div>

  )}
          export default DemoLanding;
   
   

