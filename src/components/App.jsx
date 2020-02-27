import React from "react";
import "../App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";
import PopUp from "./PopUp";
import axios from "axios";

class App extends React.Component {
  state = { profiles: [], showPopup: false };

  // TURNING POP UP ON AND OFF
  popUpToggle = toggleBool => {
    this.setState({ showPopUp: toggleBool });
  };

  activatePopUp = () => {
    return (
      <div>
        <section className="modal-main">
          <p>DETAILS</p>
          <button onClick={this.popUpToggle(false)}>Close</button>
        </section>
      </div>
    );
  };

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

  //FETCHEST UNSPLACE API
  componentDidMount() {
    axios
      .get("https://api.unsplash.com/photos/?client_id=" + "Yes")
      .then(data => {
        this.setState({ imgs: data.data });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }

  imageFetch = query => {
    //courteous of https://medium.com/@createdd/2-easy-ways-to-get-data-from-unsplash-com-in-react-b4835e0335fc
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id='${"addIDHere"}`
      )
      .then(data => {
        this.setState({ imgs: data.data.results });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          {/* NAV BAR START */}
          <nav className="navbar navbar-expand bg-dark justify-content-between">
            {/* HEADER LOGO */}
            <div className="navbar-header">
              <div className="corner-logo">
                <img src={eyelogo} alt="eyeLogoImg"></img>
              </div>
            </div>

            {/* HEADER MENU */}
            <div id="topBar" className="navbar-inner">
              <ul className="nav navbar-nav">
                {/* ABOUT INSERT */}
                <li className="nav-item active">
                  <a className="nav-link" onClick={this.activatePopUp}>
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
        <div className="container">
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
    "Marcel",
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
    "Sam",
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
