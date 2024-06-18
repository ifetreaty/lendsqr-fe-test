import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppSidebar from "./layouts/AppLayout/AppSidebar";
import LandingNavbar from "./layouts/LandingLayout/LandingNavbar";
import "./styles/main.scss";
import UsersPage from "./pages/UsersPage";
import { UserProvider } from "./context/UserContext";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <LandingNavbar />
          <AppSidebar />
          <main>
            <Routes>
              <Route path="/app/users" element={<UsersPage />} />
              <Route path="/user-details" element={<UserDetailsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
