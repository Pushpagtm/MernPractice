import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/Register";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Users from "./pages/Users";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" exact component={RegisterUser} />
          <Route path="/create" exact component={CreateUser} />
          <Route path="/update" exact component={UpdateUser} />
          <Route path="/users" exact component={Users} />
        </Routes>
      </Router>
      <RegisterUser />
    </div>
  );
}

export default App;
