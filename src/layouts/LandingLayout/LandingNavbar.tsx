import { useEffect, useState } from "react";
import logoSvg from "../../assets/logo.svg";
import { BellIcon, SearchIcon } from "../../components/icons/TopNavIcons";
import { AvatarIcon } from "../../components/icons/UserDetailsIcons";
import "./LandingNavbar.scss";

export default function LandingNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        console.log(isMobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-nav">
      <div className="top-nav__left">
        <img src={logoSvg} alt="Logo" className="top-nav__logo" />
      </div>
      <div className="top-nav__center">
        <div className="top-nav__search">
          <input type="text" placeholder="Search for anything" />
          <div className="top-nav__search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="top-nav__right">
        <a href="/docs" className="top-nav__link">
          Docs
        </a>
        <div className="top-nav__icon">
          <BellIcon />
        </div>
        <div className="user-details">
          <div className="user-img">
            <AvatarIcon />
          </div>
          <div className="user-name">
            <h3>User</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
