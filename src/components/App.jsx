import React from "react";
import "../App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";
import PopUp from "./PopUp";
import axios from "axios";

class App extends React.Component {
  state = { profiles: [], showPopup: false, images: [] };

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
    this.imageFetch("joe");
  };

  ImageList = props => {
    console.log("PRops TEST" + this.props.images);
    return <img src={this.props.images} />;
  };

  //FETCHES UNSPLASH  API (FROM https://medium.com/@nabendu82/image-search-app-using-unsplash-api-in-reactjs-3-fa69a67dfa2e)
  imageFetch = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 10c64e2cab19076618973d6b2e6386a5324262a2e490c990fed2062fa923bb30"
      }
    });
    this.setState({ images: response.data.results });
    console.log("RESPONSE CHECK " + JSON.stringify(response));
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
                {/* <img src={this.state.images} /> */}
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
          <div>{this.ImageList("TEST SEARCH 4 IMAGE")}</div>
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
