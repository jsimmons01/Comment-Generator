import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { COMMENTS } from "../comments";

/*************************************************** TO DO**************************************************************************
    *******************************Get the app working to dos******************
    *create a comment file with boy and girl pronouns seperately
    *create a component that filters through the array to match gender
    *create another component that filters through array to match student level
    *display generated comments in the text box       
    *change names of components so they make more since     
    *Actually may not need two components, but a render component that matches the gender with 
    *with the grade level     
    *Fix something, insertName is only working when put in the garde level            
************************************Aspirations*********************************

 * eventually have subject based comments
 * style page
 * add comments to a document that teacher can send to themselves
 *

 
 *********************************************************************************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: " ",
      gender: " ",
      level: "On Grade Level",
      text: " ",
      comments: COMMENTS,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.insertName = this.insertName.bind(this);
  }
  handleSubmit(event) {
    alert("Loading Comment." + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type === "text") {
      this.setState({
        [value]: this.state.comments.comment.replace(
          /StudentName/g,
          this.state.studentName
        ),
      });
    }
    this.setState({
      [name]: value,
    });
  }

  // insertName(comments) {
  //   this.setState({
  //     [comments]: this.state.comments.comment.replace(
  //       /StudentName/g,
  //       this.state.studentName
  //     ),
  //   });
  // }

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
                >
                  {this.state.comments.comment}
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default StudentInfo;
