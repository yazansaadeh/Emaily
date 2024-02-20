import { Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Landing from "./component/Landing";
import Dashboard from "./component/Dashboard";
import SurveyNew from "./component/surveys/SurveyNew";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="container">
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
