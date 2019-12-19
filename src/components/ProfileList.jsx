import React from "react";
import Profile from "./Profile";

const ProfileList = users => {
  // const renderedProfileList = users => {
  //   return (
  //     //get a bunch of string velues, convert to profile
  //     <div class="row">
  //       {this.props.users.map(
  //         <div class="col-sm-3">
  //           <Profile name="Jimmy Asscrack" age="23" gender="MALE" />
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div class="profileList" style={{ background: "white" }}>
      {/* {renderedProfileList} */}
      {/* {console.log("RENDEREDLIST:" + renderedProfileList)} */}
      <Profile name="Jim" age={40} gender="Male"></Profile>
    </div>
  );
};

export default ProfileList;
