import { Outlet } from "react-router-dom";
import AppSidebar from "../layouts/AppLayout/AppSidebar";
import LandingNavbar from "../layouts/LandingLayout/LandingNavbar";

export default function AuthenticatedLayout() {
  return (
    <div className="authenticated-layout">
      <LandingNavbar />
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
