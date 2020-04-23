import React from "react";
import "../App.scss";
import "./PopUp.css";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUpPage from "./SignUpPage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import InitPopUp from "./InitPopUp";
import Button from "react-bootstrap/Button";
import Ticker from "react-ticker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import carobackground from "./img/carouselblock.png";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class App extends React.Component {
  state = { profiles: [], images: [], showPopUp: false };

  //HANDLES OPENING/CLOSING OF MODAL
  openPopUp = () => {
    this.setState({ open: true });
  };

  closePopUp = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  slct = (limit) => {
    //minifies the Randomiser function
    return Math.round(Math.random() * limit);
  };

  //CHECK FOR SAVED STATE DATA https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js
  getInitialState = () => {
    var stateSaved = localStorage.getItem("savedBios") || 1; //gets stringified Bio data

    return {
      stateSaved: stateSaved,
    };
  };

  componentWillMount = () => {
    //FIND A WAY TO MAKE THIS PERMANENT

    //Builds a list of Profiles
    let profList = [];
    for (let i = 0; i < 23; i++) {
      const tempGender = Math.random() >= 0.5; //Generates random Boolean to detemine Gender
      const tempName = tempGender //Assigns name according to Gender
        ? this.mNames[this.slct(this.fNames.length)]
        : this.fNames[this.slct(this.fNames.length)];
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //For assiging last name

      profList.push([
        {
          key: i,
          name:
            tempName +
            " " +
            alphabet[Math.floor(Math.random() * alphabet.length)],
          age: this.slct(65) + 18,
          gender: tempGender ? "Male" : "Female",
          bio:
            "There's nothing I love more than " +
            this.mandatedHobbies[this.slct(this.mandatedHobbies.length)],
        },
      ]);
    }
    this.setState({ profiles: profList });
  };

  render() {
    const { open } = this.state;
    return (
      <Container fluid>
        <Helmet>
          <title>MateMatch - Partner Finding for Citizens of the Regime</title>
        </Helmet>
        <Router>
          {/* Start of Nav Bar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Link to="/home">
                <Image src={eyelogo} alt="eyeLogoImg" to="/home" rounded />
              </Link>
            </Navbar.Brand>

            {/* HEADER MENU */}
            <Nav id="topBar" className="ml-auto">
              {/* CAROUSEL OF ADMIN MESSAGES */}
              {/* ABOUT INSERT */}
              <Nav.Link onClick={this.openPopUp}>About</Nav.Link>
              {/* View own profile TODO: Set as first profile with Gear?*/}

              <Nav.Link href="profile" to="/home">
                <Link to="/home">Profile</Link>
              </Nav.Link>

              {/* Filters for Profile (Expandible) */}
              <Nav.Link href="filter" to="/signUpPage">
                <Link to="/signUpPage">Filters</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          {this.state.showPopUp ? (
            <div onClick={this.closePopUp} className="back-drop"></div>
          ) : null}
          {/* <PopUp show={this.state.showPopUp} close={this.closePopUp}>
            Maybe aircrafts fly very high because they don't want to be seen in
            plane sight?
          </PopUp> */}

          <Modal open={open} onClose={this.closePopUp}>
            <InitPopUp></InitPopUp>
            <Link to="/signUpPage" onClose={this.closePopUp}>
              <Button>Continue</Button>
            </Link>
          </Modal>

          {/* ROUTER OUTPUT GOES HERE */}

          {/* TODO: Fix the Styling */}
          <Switch>
            <Route path="/home">
              <ProfileList users={this.state.profiles} />
            </Route>
            <Route path="/signUpPage" component={SignUpPage} />
          </Switch>
        </Router>
      </Container>
    );
  }

  //Courteousy of https://randomwordgenerator.com/name.php.
  mNames = [
    "Clint",
    "Thad",
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
    "Keneth",
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
    "Cheri",
  ];

  mandatedHobbies = [
    "consuming product",
    "asking very few questions as possible",
    "consuming nourishment in moderation",
    "thinking about how best to serve authority",
    "the usual stuff",
    "imagining pure thoughts",
    "remaining on brand",
    "being a synergistic customer",
    "hitting that nae nae",
    "gaming epic style",
    "denouncing Noam Chomsky's Manufacturing Consent as woefully inaccurate",
    "striving for equality",
    "campaigning for tax breaks for entertainment corporations",
    "voting for the same political entities time and time again like a loyal dog",
    "being complacent",
  ];
}

export default App;
