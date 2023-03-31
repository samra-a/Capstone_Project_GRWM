import { useState } from "react";

const SignUpForm = (saveUser) => {
  const [user, setUser] = useState({
    name: "",
    email:""
})

  const handleUserChange = (event) => {
    setUser(event.target.value);
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
          <input type="text" value={text} onChange={handleUserChange} />
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
