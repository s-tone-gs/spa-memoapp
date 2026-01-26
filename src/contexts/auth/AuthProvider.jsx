import { useState } from "react";
import { LoginContext } from ".";
import AuthButton from "./AuthButton.jsx";

function AuthProvider({ children }) {
  const [loggedIn, setloggedIn] = useState(false);
  function handleLogin() {
    setloggedIn(true);
  }
  function handleLogout() {
    setloggedIn(false);
  }
  return (
    <>
      <AuthButton
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <LoginContext.Provider value={loggedIn}>{children}</LoginContext.Provider>
    </>
  );
}

export default AuthProvider;
