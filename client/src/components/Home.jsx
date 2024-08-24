import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {

    if(localStorage.getItem("name")?.length > 0){
      localStorage.removeItem("name")
      window.location.reload()
    }

    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleTakeTest = () => {
    localStorage.setItem("name", name);
    navigate("/test");
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeBox}>
        <h1>Take Test</h1>
        <h3>Name:</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleTakeTest}>Proceed</button>
      </div>
    </div>
  );
};

export default Home;
