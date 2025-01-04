import Topbar from "./components/topbar/topbar";
import Register from "./register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/write"
          element={user ? <Write /> : <Navigate to="/register" />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/register" />}
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
