import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTest, setIsTest] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const checkAgain = () => {

        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }
    checkAgain();
    
    if(location.pathname === "/test"){

      const isMobile = window.innerWidth <= 768;
      if (isMobile)
          return

      setIsTest(true)
    }else{
      setIsTest(false)
    }


  }, [location.pathname]);

  const handleLogout =() =>{
    localStorage.removeItem("token");
    if(localStorage.getItem("name"))
        localStorage.removeItem("name");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div className={`${styles.navbarContainer} ${isTest ? styles.hide : ""}`}>
      <h1 onClick={()=>navigate("/")} >Sankalp x Daira</h1>
      {isLoggedIn ? (
        <ul>
          <li onClick={()=>navigate("/home")} >Test</li>
          <li onClick={()=>navigate("/result")}>Result</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      ) : (
        <ul>
          <li onClick={()=>navigate("/login")} >Login</li>
          <li onClick={()=>navigate("/signup")} >Signup</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
