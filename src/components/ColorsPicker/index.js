import React, { useContext } from "react";
import styles from "./index.module.css";
import colors from "../../data/colors";
import { AppContext } from "../../context/AppContext";

const ColorsPicker = () => {
  const { selectedColor, setSelectedColor, user, setUser } = useContext(AppContext);

  const handleClickColor = (color) => {
    let newUser = {...user,
      color: color.hex}
      setUser(newUser);
      setSelectedColor(color)
  }

  const eachColorOption = (color) => {
    return (
      <div
        key={color.name}
        className={`${styles.color} ${selectedColor === color && styles.selected_color}`}
        style={{ backgroundColor: color.hex }}
        onClick={() => handleClickColor(color)}
      />
    );
  } 

  const colorOptions = () => {
    return colors.map(color => eachColorOption(color));
  }

  return (
    <div className={styles.color_picker}>
      <p>Select your favorite color</p>
      {colorOptions()}
    </div>
  )
}

export default ColorsPicker;
