import React, { Component } from "react";
import Profile from "./Profile";

const ProfileList = users => {
  const renderedProfileList = users.map(user => {
    return (
      <div class="col=sm">
        <Profile name={this.user.name} />
      </div>
    );
  });

  return (
    <div class="profileList" style={{ background: "white" }}>
      {renderedProfileList}
    </div>
  );
};

export default ProfileList;
