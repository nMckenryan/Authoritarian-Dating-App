import React from "react";
import axios from "axios";
//import unsplash from "../api/unsplash";
//import profPic from "./profPic.png";

//Contains a component containing basic profile information.

var style = {
  border: "1px solid #cecece",
  width: "250px",
  height: "210px",
  background: "#293036",
  color: "white"
};

const Profile = ({ name, gender, age }) => {
  // onLaunch = () => {
  //   const response = await unsplash.get('search/photos')
  // }

  const credID =
    "10c64e2cab19076618973d6b2e6386a5324262a2e490c990fed2062fa923bb30";
  // const imgs = [];

  //Builds image search query applicable for User.
  const queryBuilder = () => {
    let imageAge =
      age > 45 ? "Mature" : age < 45 && age > 30 ? "Middle Aged" : "Young";

    const string = `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=
    ${imageAge + " " + gender + " Human"}&client_id=${credID}`;

    return string;
  };

  // const performSearch = () => {
  //   axios
  //     .get(
  //       `https://api.unsplash.com/search/photos/?page=1&per_page=10&query='profile'&client_id=${credID}`
  //     )
  //     .then(data => {
  //       this.setState({ imgs: data.data.results });
  //     })
  //     .catch(err => {
  //       console.log("Error happened during fetching!", err);
  //     });
  // };

  //fetch{"https://unsplash.com/collections/607012/young-people/200x200"}

  return (
    <div class="card .card-img-top" style={style}>
      <img src="" alt="profPic" height="150" width="100" align="middle"></img>
      <h1>{name}</h1>
      <h5>
        {gender} {age}
      </h5>
      {console.log("OLD FASHIONED" + console.log(queryBuilder()))}
    </div>
  );
};

export default Profile;
