import { NavLink } from "react-router-dom";
import navConfig from "./navConfig";
import { BriefcaseIcon } from "../../components/icons/Icons";
import "./AppSidebar.scss";

export default function AppSidebar() {
  return (
    <nav>
      {navConfig.map((group, index) => (
        <div key={index}>
          {group.navGroup && <div className="nav-group">{group.navGroup}</div>}
          <ul>
            {group.navs.map((navItem, idx) => (
              <li key={idx}>
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
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
