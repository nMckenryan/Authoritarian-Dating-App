import React from "react";
import axios from "axios";
import pic from "./profPic.png";

//Contains a component containing basic profile information.

var style = {
  border: "1px solid #cecece",
  width: "220px",
  height: "300px",
  background: "#293036",
  color: "white"
};

const Profile = ({ key, userName, userAge, userGender }) => {
  return (
    <div className="card .card-img-top" style={style}>
      {/* Profile Picture */}
      <img
        src={pic}
        alt="profPic"
        display="block"
        height="auto"
        max-height="100%"
        max-width="100%"
        align="middle"
        class="center"
      ></img>

      {/* UserName column (with User Age) */}
      <h1>{userName}</h1>
      <h5>
        {userGender} {userAge}
      </h5>

      {/* Button Array (Contact User, View Profile, Report) */}
      <button type="button" className="btn btn-success">
        Contact User
      </button>
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Profile
      </a>
      {/* Collapsable Profile Portion */}
      {/* <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div> */}

      {/* Report Button */}
      <button type="button" className="btn btn-danger">
        REPORT DEVIANCE
      </button>
    </div>
  );

  const credID =
    "10c64e2cab19076618973d6b2e6386a5324262a2e490c990fed2062fa923bb30";
  // const imgs = [];

  //Builds image search query applicable for User.
  const queryBuilder = () => {
    let imageAge =
      userAge > 45
        ? "Mature"
        : userAge < 45 && userAge > 30
        ? "Middle Aged"
        : "Young";

    const string = `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=
    ${imageAge + " " + userGender + " Human"}&client_id=${credID}`;

    return string;
  };
};

export default Profile;
