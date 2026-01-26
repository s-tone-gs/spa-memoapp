import { useContext } from "react";
import { LoginContext } from ".";

function useAuth() {
  const isLoggedIn = useContext(LoginContext);
  return { isLoggedIn };
}

export default useAuth;
