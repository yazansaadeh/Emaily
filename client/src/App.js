import { Route, BrowserRouter } from "react-router-dom";

const Header = () => <h1>Header</h1>;
const Landing = () => <h1>Landing</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;
const Dashboard = () => <h1>Dashboard</h1>;

function App() {
  return (
    <div>
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
