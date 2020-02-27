import React from "react";
import Profile from "./Profile";
import "../ProfileList.css";

const ProfileList = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, key) => {
        //retrieves a bunch of string velues, convert to profile component grid
        return (
          <div id="profileSquare" className="col-sm-3">
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
