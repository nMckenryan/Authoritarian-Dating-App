import React from "react";
import "../App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";
import PopUp from "./PopUp";

class App extends React.Component {
  state = { profiles: [], showPopup: false };

  constructor(props) {
    super(props);
    this.state = { showPopUp: false };
    console.log(this.props);
  }

  componentWillMount = () => {
    //FIND A WAY TO MAKE THIS PERMANENT
    //Builds a list of Profiles
    let profList = [];
    for (let i = 0; i < 20; i++) {
      const tempGender = Math.random() >= 0.5; //Generates random Boolean to detemine Gender
      const tempName = tempGender //Assigns name according to Gender
        ? this.mNames[Math.round(Math.random() * this.fNames.length)]
        : this.fNames[Math.round(Math.random() * this.fNames.length)];
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      profList.push([
        {
          key: i,
          name:
            tempName +
            " " +
            alphabet[Math.floor(Math.random() * alphabet.length)],
          age: Math.round(Math.random() * 65 + 18), //NOTE: repetitious code. round to demographic ages?
          gender: tempGender ? "MALE" : "FEMALE"
        }
      ]);
    }
    this.setState({ profiles: profList });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {/* NAV BAR START - CONTAINER NEEDS WORK*/}
          <nav className="navbar navbar-expand">
            {/* HEADER LOGO */}
            <div className="navbar-header">
              <div className="corner-logo">
                <a className="nav-bar-brand" href="ass">
                  {/* Make Logo Font in Photoshop? */}
                  <h2>MateMatch</h2>
                </a>
                <img src={eyelogo} alt="eyeLogoImg"></img>
              </div>
            </div>
            {/* HEADER MENU */}
            <div className="navbar-inner">
              <ul className="navbar-nav">
                {/* ABOUT INSERT */}
                <li className="nav-item active">
                  <a className="nav-link" href="sds">
                    About
                  </a>
                </li>
                {/* View own profile */}
                <li className="nav-item">
                  <a className="nav-link" href="sds">
                    Profile
                  </a>
                </li>
                {/* Filters for Profile (Expandible) */}
                <li className="nav-item">
                  <a className="nav-link" href="sesd">
                    Filters
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container-fluid">
          {/* Import Profile List Component */}
          <ProfileList users={this.state.profiles} />
        </div>
      </div>
    );
  }

  //Courteousy of https://randomwordgenerator.com/name.php.
  mNames = [
    "Clint",
    "Thaddeus",
    "Amos",
    "Leroy",
    "Merle",
    "Irvin",
    "Mary",
    "Benton",
    "Wallace",
    "Ali",
    "Coy",
    "James",
    "Willard",
    "Raul",
    "Aldo",
    "Reynaldo",
    "Mathew",
    "Buford",
    "Wyatt",
    "Cruz",
    "Marcelo",
    "Vern",
    "Marcellus",
    "Howard",
    "Rod",
    "Ricky",
    "Prince",
    "Sheldon",
    "Wilmer",
    "Keneth"
  ];

  fNames = [
    "Polly",
    "Sarah",
    "Kirsten",
    "Delia",
    "Samantha",
    "Amalia",
    "Nikki",
    "Jenny",
    "Felecia",
    "Maura",
    "Katina",
    "Agnes",
    "Hope",
    "Bobbie",
    "Maricela",
    "Ashley",
    "Susanna",
    "Bernice",
    "Maribel",
    "Cheri"
  ];
}

export default App;
