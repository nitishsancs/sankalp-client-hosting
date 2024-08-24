import first from "../assets/first.svg";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  const isMobile = window.innerWidth <= 768;
  const isTablet = !isMobile && window.innerWidth <= 1024;

  let value = { height: 500, width: 500 };

  if (isMobile) {
    // value = { display: "none" };
    value = { height: 220, width: 220 };
  } else if (isTablet) {
    value = { height: 300, width: 300 };
  }

  return (
    <div className={styles.container}>
      {/* <p>Welcome to Daira</p> */}
      {/* // import first.svg */}
      <img src={first} alt="first" style={value} />
      <div className={styles.right}>
        <h1>Schonell Test - Sankalp x Daira</h1>
        <p>
          Welcome to Schonell Test, a simple and easy way to test your reading
          age.
        </p>
        <p>Click on the link below to get started.</p>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => window.location.replace("/login")}
            className={styles.first}
          >
            Login
          </button>
          <button
            onClick={() => window.location.replace("/signup")}
            className={styles.second}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
