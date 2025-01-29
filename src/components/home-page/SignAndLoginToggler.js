import React, { useState } from 'react';

function SignAndLoginToggler() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" name="username" required />
        </label>
        <br />
        <label>
          fullName:
          <input type="text" name="fullName" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <label>
          avatar:
          <input type="file" name="avatar" required />
        </label>
        <br />
        <label>
          coverImage:
          <input type="file" name="coverImage" />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignAndLoginToggler;
