import { useMemo, useEffect } from "react";
import styles from "../../styles/Test.module.css";
import { useNavigate } from "react-router-dom";

// Ensure wordsGrid is imported or defined in this file
const wordsGrid = [
  // Your wordsGrid data here
];

const AfterTest = ({ username, score, age, correctWords, incorrectWords }) => {
  console.log('Received props:', { username, score, age, correctWords, incorrectWords });
  const navigate = useNavigate();

  // Debugging: Check received props
  useEffect(() => {
    console.log("Received props:", { username, score, age, correctWords, incorrectWords });
  }, [username, score, age, correctWords, incorrectWords]);

  // Calculate tableData with debugging
  const tableData = useMemo(() => {
    const sequence = correctWords.every(word => wordsGrid.flat().includes(word));
    console.log("Table Data Calculation:", { correctWords, incorrectWords, sequence, score });
    return {
      correctWords,
      incorrectWords,
      continuousSequence: sequence,
      score: score,
    };
  }, [correctWords, incorrectWords, score]);

  // Debugging: Check tableData
  useEffect(() => {
    console.log("Table Data:", tableData);
  }, [tableData]);

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.results}>
        <h1>Name: <span>{username}</span></h1>
        <h1>Score: <span>{score}</span></h1>
        <h1>Reading Age: <span>{age}</span></h1>
        <table>
          <thead>
            <tr>
              <th>Correct Words</th>
              <th>Incorrect Words</th>
              <th>Continuous Sequence</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tableData.correctWords.join(", ")}</td>
              <td>{tableData.incorrectWords.join(", ")}</td>
              <td>{tableData.continuousSequence ? "Yes" : "No"}</td>
              <td>{tableData.score}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => navigate("/home")}>Go back</button>
      </div>
    </div>
  );
}

export default AfterTest;
