import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // LOGIN
      console.log("LOGIN", { email, password });
    } else {
      // SIGNUP
      console.log("SIGNUP", {
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="primary-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <button
          type="button"
          className="auth-toggle-btn"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create Account" : "Back to Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;
