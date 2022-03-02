import Login from './pages/Login';
import Profession from './pages/Profession';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profession" exact component={Profession} />
          <Route path="/student" exact component={Student} />
          <Route path="/teacher" exact component={Teacher} />

        </Switch>
      </Router>
    </>
  );
}

export default App;