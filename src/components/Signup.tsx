import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // State for storing what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form className="max-w-md m-auto pt-24 bg-black text-amber-50">
        <h2>Sign up today</h2>

        <p>
          Already have an account?{" "}
          <Link to="/sign-in">Sign in</Link>
        </p>

        <div className="flex flex-col py-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">
            Sign up
          </button>

        </div>
      </form>
    </div>
  );
};

export default Signup;