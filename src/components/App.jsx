import React from "react";
import "../App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";

class App extends React.Component {
  state = { profiles: [] };

  componentDidMount = () => {
    let profList = [];
    for (let i = 0; i < 9; i++) {
      profList.push("Individual " + Math.floor(Math.random() * 1000000000));
    }

    this.setState({ profiles: profList });
    console.log(this.state.profiles.toString() + " Y O" + profList.toString());
  };

  render() {
    return (
      <div class="container">
        <div class=".nav-bar-nav">
          <h2>Title</h2>
        </div>
        {/* look for population loop? */}
        <div class="row">
          <div class="col-sm">
            <Profile />
          </div>
          <div class="col-sm">
            <Profile />
          </div>
          <div class="col-sm">
            <Profile />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <Profile />
          </div>
          <div class="col-sm">
            <Profile />
          </div>
          <div class="col-sm">
            <Profile />
          </div>

          {/* <ProfileList users={this.state.profiles} /> */}

          {/* <div class="col=sm">
            <Profile />
          </div>
          <div class="col=sm">
            <Profile />
          </div>
          <div class="col=sm">
            <Profile />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
