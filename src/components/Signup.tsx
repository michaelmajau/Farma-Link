import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // State for storing what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <div className=" bg-amber-50 text-black">
      <form className="max-w-md m-auto pt-24">
        <h2>Sign up today</h2>

        <p>
          Already have an account?{" "}
          <Link to="/sign-in">Sign in</Link>
        </p>
        <div className="flex flex-row gap-4">
          <div>I am a seller</div>
          <div>I am a buyer</div>
        </div>

        <div className="flex flex-col py-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <input className="mt-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input className="mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button type="submit" disabled={loading} className="mt-4" >
            Sign up
          </button>

        </div>
      </form>
    </div>
  );
};

export default Signup;