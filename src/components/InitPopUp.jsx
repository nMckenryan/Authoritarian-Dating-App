import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// This handles the popup Modals.

//https://www.npmjs.com/package/react-responsive-modal

const InitPopUp = (props) => {
  // Generates an entry message that appears on first launch
  return (
    <Container fluid>
      <h1>Welcome Valued Consumer!</h1>
      <p>
        Congratulations! Thank you for heeding the call of your Company. You're
        on your way to continue the glorious future for JoyCo Investors.
      </p>
      <small className="text muted">
        CAUTION: SEMI-MORONS, SERVITORS, SPACE MARINES FROM BATTALIONS ALPHA
        THROUGH GAMMA, THEME PARK HOSTS AND ACCOUNTANTS ARE PROHIBITED FROM
        CONTINUING IN ACCORDANCE TO POLICY 234235.2
      </small>
    </Container>
  );
};

export default InitPopUp;
