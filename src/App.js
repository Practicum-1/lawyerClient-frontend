import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import RBAC from "./rbac/RBAC";
import HomePage from "./pages/Common/HomePage/HomePage";
import Login from "./pages/Common/Login/Login";
import Signup from "./pages/Common/SignUp/Signup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Open Routes */}
        {/* <Route path="/" exact element={<Navbar />}> */}
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        {/* Routes rendered according to role*/}
        <Route path="/signup" element={<Signup />} />
        {/* </Route> */}
        <Route path="/*" element={<RBAC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
