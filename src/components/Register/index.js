import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import ColorsPicker from "../ColorsPicker/index";
import Copyright from "../Copyright";
import Error from "../Errors/index";
import { AppContext } from "../../context/AppContext";
import { myfirestore } from "../../firebase/firebase.js"

const Register = () => {
  const { user, setUser } = useContext(AppContext);
  
  const [ error, setError ] = useState({
    isError: false,
    message: ""
  });

  const handleUsernameChange = (e) => {
    let newUser = {...user,
    username: e.target.value.toString()}
    setUser(newUser);
  }

  const saveUser = () => {
    console.log(user.username.trim().length)
    if (user.username.trim().length === 0)
    {
      setError({isError: true, message: "Type your username pleasse!"})}
    else {

      const userToSave = {
        userId: user.userId,
        email: user.email,
        username: user.username,
        color: user.color,
        photoURL: user.photoURL
      }

      myfirestore.collection("users")
      .add(userToSave)
      .catch((e) => {
        setError({isError: true, message: ""})
      })
      setUser({...user,
        isRegistered: true})
    }
  }

  return (
    <div className={styles.register}>
      <div className="box">
        <h1>WELCOME<br/><em>{user.displayName}!</em></h1>
        <input type="text" autoFocus maxLength="30" placeholder="type your username" className={styles.username} style={{ backgroundColor: user.color }} value={user.username} onChange={handleUsernameChange}></input>
        <ColorsPicker />
      </div>
      <button className={styles.button_register} onClick={saveUser}>REGISTER</button>
      {error.isError && <Error message={error.message} />}
      <Copyright/>
    </div>
)}

export default Register;
