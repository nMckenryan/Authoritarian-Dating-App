import React from "react";
import "../App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";

class App extends React.Component {
  state = { profiles: [] };
  userGroup = [<Profile name="Jim" age="22" gender="M" />];

  componentDidMount = () => {
    let profList = [];
    for (let i = 0; i < 9; i++) {
      //profList.push(Individual " + Math.floor(Math.random() * 1000000000));
      //profList.push(<Profile name={"Individual " + i} age={23} gender={"M"} />);
      profList.push([{ name: "Individual " + { i }, age: "23", gender: "M" }]);
    }

    this.setState({ profiles: profList });
    console.log(this.state.profiles.toString() + " Y O " + profList.toString());
  };

  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand">
          <div class="container-fluid">
            {/* HEADER LOGO */}
            <div class="navbar-header">
              <div class="corner-logo">
                <a class="nav-bar-brand" href="ass">
                  <h2>MateMatch</h2>
                </a>
                <img src={eyelogo} alt="eyeLogoImg"></img>
              </div>
            </div>

            {/* HEADER MENU */}
            <div class="navbar-inner">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="sdasd">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sds">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sesd">
                    Filters
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="see">
                    Blackout Zone Mode
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ass">
                    Report Infringement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ProfileList users={<Profile name="Jim" age="22" gender="M" />} />

        {/* look for population loop? */}

        {/* <ProfileList users={this.state.profiles} /> */}

        {/* <div class="col-sm"3
            <Profile />
          </div>
          <div class="col-sm"3
            <Profile />
          </div>
          <div class="col-sm"3
            <Profile />
          </div> */}
      </div>
    );
  }
}

export default App;
