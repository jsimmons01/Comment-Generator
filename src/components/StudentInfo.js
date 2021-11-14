import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

/**********************************************************
 * create a form that takes in info about student
 * after form is submitted, choose correct comments from database that matches the student level
 * note that it is only to help teaches start
 * start with about 5 comments
 * eventually have subject based comments
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
  }
}
