import { NavLink } from "react-router-dom";
import navConfig from "./navConfig";
import { BriefcaseIcon } from "../../components/icons/NavbarIcons";

import "./AppSidebar.scss";
import { BellIcon } from "../../components/icons/TopNavIcons";
import { AvatarIcon } from "../../components/icons/UserDetailsIcons";

interface IAppSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function AppSidebar({ isSidebarOpen }: IAppSidebarProps) {
  return (
    <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      {navConfig.map((group, index) => (
        <div key={index}>
          {group.navGroup && <div className="nav-group">{group.navGroup}</div>}
          <ul>
            {group.navs.map((navItem, idx) => (
              <li key={idx} className={navItem.className}>
                <NavLink
                  to={navItem.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "non-active"
                  }
                >
                  {navItem.icon ? (
                    <navItem.icon width="20px" height="20px" />
                  ) : (
                    <BriefcaseIcon width="20px" height="20px" />
                  )}
                  <span>{navItem.title}</span>
                  {navItem.className === "switch-organization" &&
                    navItem.secondIcon && (
                      <navItem.secondIcon
                        width="14px"
                        height="14px"
                        className="second-icon"
                      />
                    )}
                </NavLink>
              </li>
            ))}
            {group.navGroup === "TopNav" && (
              <>
                <li className="docs-link">
                  <a href="/docs" className="top-nav__link">
                    Docs
                  </a>
                </li>
                <li className="bell-icon">
                  <div className="top-nav__icon">
                    <BellIcon />
                  </div>
                </li>
                <li className="user-details">
                  <div className="user-img">
                    <AvatarIcon />
                  </div>
                  <div className="user-name">
                    <h3>User</h3>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      ))}
    </nav>
  );
}
