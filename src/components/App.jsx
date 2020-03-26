import React from "react";
import "../App.css";
import ProfileList from "./ProfileList";
import eyelogo from "./img/eyelogo.png";
import Button from "react-bootstrap/Button";
import PopUp from "./PopUp";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = { profiles: [], images: [] };

  // TURNING POP UP ON AND OFF
  popUpToggle = toggleBool => {
    this.setState({ showPopUp: toggleBool });
  };

  //when done update with React-Bootstrap code
  activatePopUp = () => {
    return (
      // <div>
      //   <section className="modal-main">
      //     <p>DETAILS</p>
      //     <Button variant="primary" onClick={this.popUpToggle(false)}>
      //       Close
      //     </Button>
      //   </section>
      // </div>
      <PopUp></PopUp>
    );
  };

  constructor(props) {
    super(props);
    this.state = { showPopUp: false };
    console.log(this.props);
  }

  slct = limit => {
    //minifies the Randomiser function
    return Math.round(Math.random() * limit);
  };

  //CHECK FOR SAVED STATE DATA https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js
  getInitialState = () => {
    var stateSaved = localStorage.getItem("savedBios") || 1; //gets stringified Bio data

    return {
      stateSaved: stateSaved
    };
  };

  //SAVING STATE TO LOCAL STORAGE
  //   useEffect(() => {
  //     localStorage.setItem("savedBio", JSON.stringify(this.state.profiles));
  //   });

  //   React.useEffect(() => {
  //   const data = localStorage.getItem("my-tier-list"));
  //   if(data) {
  //     console.log(data);
  //     //this.setState(profiles: data);
  //   };
  // });

  componentWillMount = () => {
    //FIND A WAY TO MAKE THIS PERMANENT

    //Builds a list of Profiles
    let profList = [];
    for (let i = 0; i < 20; i++) {
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
            this.mandatedHobbies[this.slct(this.mandatedHobbies.length)]
        }
      ]);
    }
    this.setState({ profiles: profList });
    this.imageFetch("joe");
  };

  ImageList = props => {
    console.log("PRops TEST" + this.props.images);
    return <Image src={this.props.images} rounded />;
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
    // console.log("RESPONSE CHECK " + JSON.stringify(response));
  };

  render() {
    let closePopUp = () => this.setState({ showPopUp: false });
    return (
      <div className="wrapper">
        <Helmet>
          {/* TODO: Add metadata that shows currently logged in person's name */}
          <title>MateMatch - Partner Finding for Citizens of the Regime</title>
        </Helmet>
        <Container fluid>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Image src={eyelogo} alt="eyeLogoImg" rounded />
            </Navbar.Brand>

            {/* HEADER MENU */}
            <Nav id="topBar" className="ml-auto">
              {/* ABOUT INSERT */}
              <Nav.Link onClick={() => this.setState({ showPopUp: true })}>
                About
              </Nav.Link>
              {/* View own profile */}
              <Nav.Link href="profile">Profile</Nav.Link>
              {/* Filters for Profile (Expandible) */}
              <Nav.Link href="filter">Filters</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <div className="container">
          <PopUp show={this.state.showPopup} onHide={closePopUp} />
          {/* FROM https://www.youtube.com/watch?v=6QvNCZQWDZk */}
          {/* Import Profile List Component */}
          <div>{this.ImageList("TEST SEARCH 4 IMAGE")}</div>
          <ProfileList users={this.state.profiles} />
        </div>
      </div>
    );
  } // useEffect(() => {
  //   // if (getInitialState == null) {
  //   //Builds a list of Profiles
  //   let profList = [];
  //   for (let i = 0; i < 20; i++) {
  //     const tempGender = Math.random() >= 0.5; //Generates random Boolean to detemine Gender
  //     const tempName = tempGender //Assigns name according to Gender
  //       ? this.mNames[this.slct(this.fNames.length)]
  //       : this.fNames[this.slct(this.fNames.length)];
  //     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //For assiging last name

  //     profList.push([
  //       {
  //         key: i,
  //         name:
  //           tempName +
  //           " " +
  //           alphabet[Math.floor(Math.random() * alphabet.length)],
  //         age: this.slct(65) + 18,
  //         gender: tempGender ? "Male" : "Female",
  //         bio:
  //           "There's nothing I love more than " +
  //           this.mandatedHobbies[this.slct(this.mandatedHobbies.length)]
  //       }
  //     ]);
  //   }
  //   this.setState({ profiles: profList });
  //   this.imageFetch("joe");
  //   // } else {
  //   //   this.setState;
  //   // }
  // }, []);

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
    "being complacent"
  ];
}

export default App;
