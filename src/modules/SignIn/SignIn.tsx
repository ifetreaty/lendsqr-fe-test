import "./SignIn.scss";
import logoSvg from "../../assets/logo.svg";
import illustrationSvg from "../../assets/illustration.svg";
import SignInForm from "./SignInForm/SignInForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__left">
        <img
          src={logoSvg}
          alt="logo"
          className="sign-in__logo"
          style={{ width: "10rem", marginLeft: "3rem", marginTop: "2.625rem" }}
        />
        <img
          src={illustrationSvg}
          alt="illustration"
          className="sign-in__illustration"
        />
      </div>
      <div className="sign-in__right">
        <SignInForm />
      </div>
      <ToastContainer />
    </div>
  );
}
