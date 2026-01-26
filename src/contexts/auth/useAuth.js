import { useContext } from "react";
import { LoginContext } from ".";

export default function useAuth() {
  const isLoggedIn = useContext(LoginContext);
  return { isLoggedIn };
}
