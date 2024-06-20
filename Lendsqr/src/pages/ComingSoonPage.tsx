import { useNavigate } from "react-router-dom";
import ComingSoonImage from "../assets/illustration.svg";
import "../styles/ComingSoonPage.scss";

export default function ComingSoonPage() {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/app/users");
  };

  return (
    <div className="coming-soon-page">
      <div className="center-container">
        <div className="content-container">
          <img
            src={ComingSoonImage}
            alt="Coming Soon"
            className="coming-soon-image"
          />
          <h1 className="coming-soon-heading">We can see it coming!</h1>
          <p className="coming-soon-text">
            We are diligently working to bring this feature to you as quickly as
            possible. In the meantime, we invite you to explore our other
            exceptional offerings.
          </p>
          <button className="pill-button" onClick={navigateToDashboard}>
            Go-to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
