import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:{" "}
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
