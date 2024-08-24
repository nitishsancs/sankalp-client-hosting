import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Login.module.css";

import { backendIp } from "../VALUE";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (username?.length === 0 || password?.length === 0) {
      alert("Please enter username and password");
      return;
    }

    const response = await fetch(`${backendIp}/api/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.id);
      console.log(data);
      alert("Account created successfully. Redirecting...");
      window.location.reload();
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Signup</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
