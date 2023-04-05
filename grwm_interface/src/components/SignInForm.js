import { useState } from "react";

const SignInForm = () => {
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
    <div className="sign-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input type="text" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Password:{" "}
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default SignInForm;
