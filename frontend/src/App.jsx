import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/Register";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" exact component={RegisterUser} />
        </Routes>
      </Router>
      <RegisterUser />
    </div>
  );
}

export default App;
