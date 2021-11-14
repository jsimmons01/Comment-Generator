import Header from "./components/Header";
import StudentInfo from "./components/StudentInfo";
import { Card, CardHeader } from "reactstrap";

function App() {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <Header />
          <StudentInfo />
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
