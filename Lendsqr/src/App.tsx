import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppSidebar from "./layouts/AppLayout/AppSidebar";
import UsersPage from "./pages/Users";
import LandingNavbar from "./layouts/LandingLayout/LandingNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <LandingNavbar />
        <AppSidebar />
        <Routes>
          <Route path="/app/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
