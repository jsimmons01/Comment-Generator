import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

/**********************************************************
 * create a form that takes in info about student
 * after form is submitted, choose correct comments from database that matches the student level
 * note that it is only to help teaches start
 * start with about 5 comments
 * eventually have subject based comments
 * student name and gender pronouns will be added to the comments
 * create file that has comments with space for name and gender
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
      level: " ",
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
        <div className="col-md-10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="studentName" md={4}>
                Student's Name:
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
              <Col>
                <Input type="radio" name="gender" />
                <Label check>Boy</Label>
              </Col>

              <Col>
                <Input type="radio" name="gender" />
                <Label check>Girl</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="level" md={4}>
                Level
              </Label>
              <Col md={4}>
                <Input type="select" id="level" name="level">
                  <option>Below Grade Level</option>
                  <option>On Grade Level</option>
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
