import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(false);
  console.log(password);
  console.log(username);
  console.log(confirmPassword);

  const handleSubmit = () => {
    console.log("submitted")
    if (password !== confirmPassword) {
        setError(true)
        return
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <div className="auth-container-form">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin &&<input
            type="text"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />}
          {error && <p> Incorrect Password </p>}
          <button className="standard-button" onClick={handleSubmit}>GO</button>
        </div>
        <div className="auth-options">
        <button  onClick={() => setIsLogin(false)}
        style={{ backgroundColor: !isLogin ? '#000000' :  '#323235'}}
        >Sign Up</button>
        <button onClick={() => setIsLogin(true)}
        style={{ backgroundColor: isLogin ? '#000000' :  '#323235'}}
        >Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
