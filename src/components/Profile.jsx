import React, { Component } from "react";
import unsplash from "../api/unsplash";
import profPic from "./profPic.png";

//Contains a component containing basic profile information.

var style = {
  border: "1px solid #cecece",
  width: "250px",
  height: "200px"
};

const Profile = ({ name }) => {
  // onLaunch = () => {
  //   const response = await unsplash.get('search/photos')
  // }

  return (
    <div class="card .card-img-top" style={style}>
      <img src={profPic} alt="profPic"></img>
      <h2>{name}</h2>
      <h3>{"gender, Age"}</h3>
    </div>
  );
};

export default Profile;
