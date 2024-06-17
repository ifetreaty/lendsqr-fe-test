import logoSvg from "../../assets/logo.svg";
import "./LandingNavbar.scss";

export default function LandingNavbar() {
  return (
    <div className="top-nav">
      <div className="top-nav__left">
        <img src={logoSvg} alt="Logo" className="top-nav__logo" />
        <input
          type="text"
          placeholder="Search..."
          className="top-nav__search"
        />
      </div>
      <div className="top-nav__right">
        <span className="top-nav__user-name">John Doe</span>
        <img
          src="/path/to/avatar.jpg"
          alt="User Avatar"
          className="top-nav__avatar"
        />
      </div>
    </div>
  );
}
