import Button from "../../components/Button.jsx";

function AuthButton({ loggedIn, handleLogin, handleLogout }) {
  return (
    <div className="login">
      {loggedIn ? (
        <Button label="ログアウト" onClick={handleLogout} />
      ) : (
        <Button label="ログイン" onClick={handleLogin} />
      )}
    </div>
  );
}

export default AuthButton;
