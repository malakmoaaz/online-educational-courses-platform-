import React, { useEffect } from "react";

function SignUp({ setIsAuthPage }) {
  useEffect(() => {
    setIsAuthPage(true);
    return () => setIsAuthPage(false); // Reset when component unmounts
  }, [setIsAuthPage]);

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
