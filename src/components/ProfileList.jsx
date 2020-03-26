import React from "react";
import Profile from "./Profile";
import "../ProfileList.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProfileList = ({ users }) => {
  return (
    <Row>
      {users.map((user, key) => {
        //retrieves a bunch of string velues, convert to profile component grid
        return (
          <Col id="profileSquare" sm>
            <Profile
              key={key}
              userName={user[0].name}
              userAge={user[0].age}
              userGender={user[0].gender}
              userBio={user[0].bio}
            ></Profile>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProfileList;
