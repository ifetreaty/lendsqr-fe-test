import { Outlet } from "react-router-dom";

export default function UnauthenticatedLayout() {
  return (
    <div className="unauthenticated-layout">
      <Outlet />
    </div>
  );
}
