import Cookies from "js-cookie";

export const clearStorage = () => {
  Cookies.remove("tokenData");
  Cookies.remove("expiresIn");
  localStorage.removeItem("userHasAccount");
  localStorage.clear();
  sessionStorage.clear();
};
