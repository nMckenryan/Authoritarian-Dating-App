import React from "react";
import axios from "axios";
import pic from "./profPic.png";
import Avatar from "react-avatar";
import AvatarGenerator from "react-avatar-generator";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

//Contains a component containing basic profile information.

var style = {
  border: "1px solid #cecece",
  width: "220px",
  background: "#293036",
  color: "white",
};

const Profile = ({ key, userName, userAge, userGender, userBio }) => {
  return (
    <div className="card .card-img-top" style={style}>
      {/* Profile Picture */}
      {/* Generates Avatar Picture, Courteousy of: https://www.npmjs.com/package/react-avatar-generator */}
      <AvatarGenerator
        colors={["blue", "yellow", "pink", "purple"]}
        shape="triangle"
        backgroundColor="#e3e3e3"
        width="145"
        height="150"
        sizing="10"
      />
      {/* UserName column (with User Age) */}
      <h1>{userName}</h1>
      <h5>
        {userGender} {userAge}
      </h5>
      {/* Button Array (Contact User, View Profile, Report) */}
      <Button variant="success" block>
        Contact User
      </Button>
      {/* Collapsable Profile Portion (From React-Bootstrap)*/}
      <Accordion>
        <Accordion.Toggle as={Button} eventKey="0">
          Profile
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{userBio}</Card.Body>
        </Accordion.Collapse>
      </Accordion>
      {/* Report Button */}
      <Button variant="danger" block>
        REPORT DEVIANCE
      </Button>
    </div>
  );

  // const credID =
  //   "10c64e2cab19076618973d6b2e6386a5324262a2e490c990fed2062fa923bb30";
  // // const imgs = [];

  // //Builds image search query applicable for User.
  // const queryBuilder = () => {
  //   let imageAge =
  //     userAge > 45
  //       ? "Mature"
  //       : userAge < 45 && userAge > 30
  //       ? "Middle Aged"
  //       : "Young";

  //   const string = `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=
  //   ${imageAge + " " + userGender + " Human"}&client_id=${credID}`;

  //   return string;
  // };
};

export default Profile;
