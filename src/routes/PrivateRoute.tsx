import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface IPrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

export default function PrivateRoute({ element, path }: IPrivateRouteProps) {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/app/login" replace />
  );
}
