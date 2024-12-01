import React, { useEffect } from "react";

function Login({ setIsAuthPage }) {
  useEffect(() => {
    setIsAuthPage(true);
    return () => setIsAuthPage(false);
  }, [setIsAuthPage]);

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
