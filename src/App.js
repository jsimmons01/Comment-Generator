import Header from "./components/Header";
import { Card, CardHeader } from "reactstrap";

function App() {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <Header />
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
