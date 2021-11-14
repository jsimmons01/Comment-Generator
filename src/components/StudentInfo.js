import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

/**********************************************************
 * create a form that takes in info about student
 * after form is submitted, choose correct comments from database that matches the student level
 * note that it is only to help teaches start
 * start with about 5 comments
 * eventually have subject based comments
 * fix checkbox alignment
 * make sure you can only choose one option for checkbox
 * worry about style last
 * center submit button
 ************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      boy: false,
      girl: false,
      level: "Below Grade Level",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert("Loading Comment");
    this.props.resetFeedbackForm();
  }
  render() {
    return (
      <div className="row row-content">
        <div className="col-12">
          <h2>Teacher Comment Generator</h2>
        </div>
        <div className="col-md-10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="studentName" md={2}>
                Student Name
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  id="studentName"
                  name="studentName"
                  placeholder="Student Name"
                  value={this.studentName}
                />
              </Col>
              <Label check>
                <strong>Boy</strong>
                <Input type="checkbox" check={this.state.boy} />
              </Label>

              <Label check>
                <strong>Girl</strong>
                <Input type="checkbox" check={this.state.girl} />
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="level">Level</Label>
              <Col>
                <Input type="select" name="level" value={this.state.level}>
                  <option>Below Grade Level</option>
                  <opttion>On Grade Level</opttion>
                  <option>Above Grade Level</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default StudentInfo;
