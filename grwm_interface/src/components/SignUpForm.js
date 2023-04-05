import { useState } from "react";

const SignUpForm = (saveUser) => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleUserChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser(user);
  };

  return (
    <div className="sign-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input type="text" value={user.email} onChange={handleUserChange} />
        </label>
        <label>
          Password:{" "}
          <input type="text" value={user.password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
