import { Outlet } from "react-router-dom";
import AppSidebar from "../layouts/AppLayout/AppSidebar";
import LandingNavbar from "../layouts/LandingLayout/LandingNavbar";
import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function AuthenticatedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // <div className="authenticated-layout">
    <div
      className={`authenticated-layout app-container ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <LandingNavbar />
      <AppSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <Outlet />
      </main>
    </div>
  );
}
