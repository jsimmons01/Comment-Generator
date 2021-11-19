import { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import StudentInfo from "./StudentInfo";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Card>
          <CardBody>
            <CardTitle>Teacher Comment Generator</CardTitle>
            <StudentInfo />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardText>
              <Directions />
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function Directions() {
  return (
    <div>
      <p>
        This app was created to give teachers a format to help them create
        comments. The hardest part is starting the commmnets and this tool is
        meant to help you with your report card comments. It is reccomended to
        flesh these out and add specific detail about sudents. Get started now!
      </p>
    </div>
  );
}

export default Home;
