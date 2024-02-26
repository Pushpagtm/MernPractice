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
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </Router>
      {/* <RegisterUser /> */}
    </div>
  );
}

export default App;
