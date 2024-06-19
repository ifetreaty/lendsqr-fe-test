import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import UsersPage from "./pages/UsersPage";
import { UserProvider } from "./context/UserContext";
import UserDetailsPage from "./pages/UserDetailsPage";
import LoginPage from "./pages/LoginPage";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<UnauthenticatedLayout />}>
            <Route path="/app/login" element={<LoginPage />} />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/app/users" element={<UsersPage />} />
            <Route path="/user/user-details" element={<UserDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
