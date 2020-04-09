import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Grid } from "react-bootstrap";

const SignUp = (props) => {
  // Generates a specialised Signup Pop-Up to set up an account. (Launches on first launch)
  return (
    <div>
      <Form.Group as={Row}>
        <h1>Welcome Valued Consumer!</h1>
        <h2>
          Congratulations! Thank you for heeding the call of your Company.
          You're on your way to continue the glorious future for JoyCo
          Investors.
        </h2>
        <small>
          CAUTION: SEMI-MORONS, SERVITORS, SPACE MARINES FROM BATTALIONS ALPHA
          THROUGH GAMMA, THEME PARK HOSTS AND ACCOUNTANTS ARE PROHIBITED FROM
          CONTINUING IN ACCORDANCE TO POLICY 234235.2
        </small>
      </Form.Group>
      <Form.Group as={Row}>
        <p>Please fill in your information.</p>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Designated Name (NO MONIKERS FROM "INTERNATIONAL MARKETS")
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGender">
          <Form.Label>Gender Role</Form.Label>
          <Form.Check type="radio" aria-label="Male" />
          <Form.Check type="radio" aria-label="Female" />
          <Form.Check type="radio" aria-label="Other" />
        </Form.Group>
      </Form.Group>
      <small>
        False Declaration is punishable by a minimum Theme Park Internship
        sentence of three months{" "}
      </small>
      <list>
        {" "}
        Your List of interests has been determined by the Committee of
        Appropriate Pasttimes. Please read for your list of interests.{" "}
      </list>
      <div> Hello! I'm and I'm really into Travelling and Consuming Media!</div>
      <p>
        According to Subsection 323 of the Corporate Breeding Policy. I do
        declare that I am of courting age and that I will endeavor to use this
        service for the benefit of society and of JoyCo's shareholders.{" "}
      </p>
      <Form.Check type="radio" aria-label="Other" />
    </div>
  );
};

export default SignUp;
