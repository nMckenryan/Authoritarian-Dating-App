import React from "react";
import "../App.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { Formik } from "formik";

class SignUpPage extends React.Component {
  d = new Date();

  state = {
    newProfile: [],
    dob: new Date(2103, this.d.getMonth(), this.d.getDate()),
    fName: "",
    cName: "",
    age: 0,
  };

  handleChange = (date) => {
    this.setState({
      dob: date,
    });
  };

  // handleFormSubmit = () => {
  //   this.state.setState((newProfile = [uName, uAge, uGender]));
  // };

  render() {
    const schema = yup.object({
      firstName: yup.string().required("Required"),
      casteName: yup.string().required("Required"),
      uAge: yup.number().required("Required"),
      terms: yup.bool().required("Required"),
    });

    return (
      <Container>
        {/* TOP BAR */}
        <Jumbotron>
          <h1>Sign Up</h1>
          <h6>
            Your first step towards finding your True Mate! <br />
            Fill out your profile. Don't be afraid to spice things up!
          </h6>
          <small>
            False Declaration is punishable by a minimum Theme Park Internship
            sentence of three months
          </small>
        </Jumbotron>

        {/* FORM VALIDATION 23/4/2020 https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8 */}

        <Formik
          onSubmit={this.handleFormSubmit}
          initialValues={{ firstName: "", casteName: "", uAge: "" }}
          validationSchema={schema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form noValidate>
              {/* NAME FORM */}
              <Row className="justify-content-md-center">
                <Form.Group as={Col} xs="4" controlId="formFName">
                  <Form.Label>Designated First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.firstName && !errors.firstName}
                    placeholder="Enter First Name:"
                  />
                  <Form.Control.Feedback>
                    This is acceptable
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    NO MONIKERS FROM "INTERNATIONAL/INTERPLANETARY MARKETS"
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} xs="4" controlId="formName">
                  <Form.Label>Enter your Caste Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="casteName"
                    value={values.casteName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.casteName && !errors.casteName}
                    placeholder="Caste Name:"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.casteName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>
                    This is acceptable
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="justify-content-md-center">
                <Form.Group as={Col} xs="4" controlId="formAge">
                  {/* DATE SELECTOR */}
                  <Form.Label>Estimated Date of Birth/Spawning</Form.Label>
                  {/* <Form.Control
                    type="text"
                    name="uAge"
                    value={values.uAge}
                    onChange={handleChange}
                    isValid={touched.uAge && !errors.uAge}
                  /> */}

                  <DatePicker //TO DO: Fix formatting, different from other components.
                    selected={this.state.dob}
                    onChange={this.handleChange}
                    dateFormat="dd/MM/yyyy"
                  ></DatePicker>
                  <Form.Control.Feedback>
                    This age acceptable
                  </Form.Control.Feedback>
                </Form.Group>
                {/* GENDER FORM */}
                <Form.Group as={Col} xs="4" controlId="formGender">
                  <Form.Label>Gender Role</Form.Label>
                  <br></br>
                  <Form.Check inline type="radio" label="Male" aria-label="m" />
                  <Form.Check inline type="radio" label="Female" />
                  <Form.Check inline type="radio" label="Other" />
                </Form.Group>
              </Row>
              <br />
              <Row className="justify-content-md-center">
                {/* T&C's  FORM */}
                <Form.Group as={Col} xs="8" controlId="formBasicCheckbox">
                  <Form.Check
                    required
                    name="terms"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                    type="checkbox"
                    label="According to Subsection 323(i) of the
                  Subspace Corporate Reproductive Morale Policy. I do declare
                  that I am of courting age and that I will endeavor to use this
                  service for the benefit of JoyCo's shareholders and
                  potentially society."
                  />
                </Form.Group>
              </Row>
              {/* END OF FORM - SUBMIT*/}
              <Row className="justify-content-md-center">
                <Col xs={3}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default SignUpPage;
