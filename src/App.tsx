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
          <Route path="/" element={<Navigate to="/login" />} />
          <Route element={<UnauthenticatedLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/app/*"
              element={<Navigate to="/coming-soon" replace />}
            />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/app/users" element={<UsersPage />} />
            <Route
              path="/app/user/user-details"
              element={<UserDetailsPage />}
            />
          </Route>
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
