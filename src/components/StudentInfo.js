import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
//import AddStudentName from "./AddStudentName";
import { COMMENTS } from "../comments";
import AddStudentName from "./AddStudentName";

/*************************************************** TO DO**************************************************************************
  
 * choose correct comments from database that matches the student level
 * start with about 5 comments
 * eventually have subject based comments
 * student name and gender pronouns will be added to the comments
 * create file that has comments with space for name and gender
 * style page
 * challenge: how exactly will I add new information to an array that is already created?
 

 *********************************************************************************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: " ",
      gender: " ",
      level: "On Grade Level",
      comments: COMMENTS,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(event) {
    alert("Loading Comment." + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  renderComments(comments) {
    this.setState({
      comments: this.state.comments.comment.replace(
        /StudentName/g,
        this.state.studentName
      ),
    });
  }

  render() {
    return (
      <div className="row row-content">
        <div className="col-md">
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
                  value={this.state.studentName}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                <Input
                  type="radio"
                  name="gender"
                  value="boy"
                  checked={this.state.gender === "boy"}
                  onChange={this.handleInputChange}
                />
                <Label check>Boy</Label>
              </Col>

              <Col>
                <Input
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={this.state.gender === "girl"}
                  onChange={this.handleInputChange}
                />
                <Label check>Girl</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="level" md={4}>
                Level
              </Label>
              <Col md={4}>
                <Input
                  type="select"
                  id="level"
                  name="level"
                  value={this.state.level}
                  onChange={this.handleInputChange}
                >
                  <option>Below Grade Level</option>
                  <option>On Grade Level</option>
                  <option>Above Grade Level</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button type="submit" color="success" size="lg" block>
                  Submit
                </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Input
                  type="textarea"
                  name="text"
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default StudentInfo;
