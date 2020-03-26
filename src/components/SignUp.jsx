import React from "react";
// import "./style.css";

class SignUp extends React.Component {
  // Generates a specialised Signup Pop-Up to set up an account. (Launches on first launch)
  render() {
    return (
      <div>
        <h1>Welcome Consumer!</h1>
        <p>
          Congratulations! Thank you for heeding the call of your Company.
          You're on your way to continue the glorious future for JoyCo Investors
          (and customers).
        </p>
        <h2>
          CAUTION: SEMI-MORONS, SERVITORS, SPACE MARINES FROM BATTALIONS ALPHA
          THROUGH GAMMA, THEME PARK HOSTS AND ACCOUNTANTS ARE PROHIBITED FROM
          CONTINUING IN ACCORDANCE TO POLICY 234235.2
        </h2>

        <p>
          Please fill in your information. False Declaration is punishable by a
          minimum Theme Park Internship sentence of three months{" "}
        </p>

        <form>Designated Name (NO MONIKERS FROM "INTERNATIONAL MARKETS") </form>
        <form>Gender Role</form>
        <list>
          {" "}
          Your List of interests has been determined by the Committee of
          Appropriate Pasttimes. Please read for your list of interests.{" "}
        </list>
        <div>
          {" "}
          Hello! I'm %name and I'm really into Travelling and Consuming Media!
        </div>
        <radio>
          {" "}
          According to Subsection 323 of the Corporate Breeding Policy. I do
          declare that I am of courting age and that I will endeavor to use this
          service for the benefit of society and of JoyCo's shareholders.{" "}
        </radio>
      </div>
    );
  }
}

export default SignUp;
