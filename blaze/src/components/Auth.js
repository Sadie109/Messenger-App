import {useState} from "react";

const Auth = () => {

    const [username, setUsername] = useState(null);

    console.log(username)
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
        </div>
      </div>
    </div>
  );
};

export default Auth;
