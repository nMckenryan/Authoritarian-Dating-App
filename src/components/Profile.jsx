import React from "react";
import AvatarGenerator from "react-avatar-generator";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Contains a component containing basic profile information.

var style = {
  border: "1px solid #cecece",
  width: "220px",
  background: "#293036",
  color: "white",
  textAlign: "center",
};

const Profile = ({ key, userName, userAge, userGender, userBio }) => {
  return (
    <Card style={style}>
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
      <h4>
        {userGender} {userAge}
      </h4>
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
    </Card>
  );
};

export default Profile;
