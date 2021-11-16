import { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import StudentInfo from "./StudentInfo";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Card>
          <CardTitle>Teacher Comment Generator</CardTitle>
          <StudentInfo />
        </Card>
      </div>
    );
  }
}

export default Main;
