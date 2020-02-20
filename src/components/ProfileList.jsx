import React from "react";
import Profile from "./Profile";
// import PopUp from "./PopUp";
// import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";

const ProfileList = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, key) => {
        //retrieves a bunch of string velues, convert to profile component grid
        return (
          <div className="col-sm-2">
            <Profile
              key={key}
              userName={user[0].name}
              userAge={user[0].age}
              userGender={user[0].gender}
            ></Profile>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileList;
