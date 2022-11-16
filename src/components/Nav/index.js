import React, { useContext } from "react";
import styles from "./index.module.css";
import { AppContext } from "../../context/AppContext";
import { logout } from "../../firebase/firebase";

const Nav = () => {

  const { user, setUser, isProfile, setIsProfile, setFilter } = useContext(AppContext);
  
  const handleLogOut = () => {
    logout();
    setIsProfile(false);
    setUser({...user,
      userId: null});
  }

  const handleProfile = (isProfile) => {
    setFilter(isProfile ? "posts" : "all");
    setIsProfile(isProfile);
  }

  const navApp = () => {
    return (<nav>
      <img className={styles.username_photo} style={{ borderColor: user.color }} onClick={() => {handleProfile(true)}} alt="User" src={user.photoURL}></img>
      <img className={styles.min_logo} alt="Logo" src="./images/logo.svg"></img>
      <img className={styles.min_logo_name} alt="Logo Name" src="./images/logo_name.svg"></img>
    </nav>);
  };

  const navProfile = () => {
    return (<nav>
      <button className={styles.button_goback} onClick={() => {handleProfile(false)}}>
      <div className={styles.username}>
        <img alt="arrow" src="./images/backarrow.png"></img>
        <span style={{ color: user.color }}>My Posts</span>
      </div>
      </button>
      <button className={styles.button_logout} style={{ color: user.color }} onClick={handleLogOut}>
        Log Out
        <img alt="logout" src="./images/logout.png"></img>
      </button>
    </nav>);
  };

  return isProfile ? navProfile() : navApp()
}

export default Nav;
