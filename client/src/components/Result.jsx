import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Result.module.css";
import { backendIp } from "../VALUE";

const Result = () => {
  const [result, setResult] = useState([]);

  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setIsLogged(false);
      navigate("/login");
    } else {
      setIsLogged(true);
    }

    const getResult = async () => {
      const response = await fetch(`${backendIp}/api/result`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setResult(data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    };

    getResult();
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.resultBox}>
        <h1>Results</h1>
        {isLogged && (
          <table>
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Score</th>
                <th>Reading Age</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                  <td>{item.readingAge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Result;
