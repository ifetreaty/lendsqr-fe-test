import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/main.scss";
import UsersPage from "./pages/UsersPage";
import { UserProvider } from "./context/UserContext";
import UserDetailsPage from "./pages/UserDetailsPage";
import LoginPage from "./pages/LoginPage";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import ComingSoonPage from "./pages/ComingSoonPage";

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
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="*" element={<Navigate to="/coming-soon" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
