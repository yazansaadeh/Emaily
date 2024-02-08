import { Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Landing from "./component/Landing";

const SurveyNew = () => <h1>SurveyNew</h1>;
const Dashboard = () => <h1>Dashboard</h1>;

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveyNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
