import { useState } from "react";
import { generatePassword } from "../../helpers.js";

import CheckBox from "./CheckBox.jsx";
import LengthSlider from "./LengthSlider.jsx";

import "./Form.css";

export default Form = ({ onGenerate }) => {
  const [passwordProperties, setPasswordProperties] = useState({
    length: 0,
    hasNumbers: false,
    hasLowercase: false,
    hasUppercase: false,
    hasSymbol: false,
  });

  const handleCheckBoxOnChange = (event) => {
    const { name, checked } = event.target;

    setPasswordProperties((prevProperties) => ({
      ...prevProperties,
      [name]: checked,
    }));
  };

  const handleRangeOnChange = (event) =>
    setPasswordProperties((prevProperties) => ({
      ...prevProperties,
      length: event.target.value,
    }));

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordProperties);
    onGenerate(newPassword);
  };

  return (
    <>
      <p id="description">Customize your password</p>
      <div id="checkboxes-container">
        <CheckBox
          label="Numbers"
          name="hasNumbers"
          checked={passwordProperties.hasNumbers}
          onChange={handleCheckBoxOnChange}
        />
        <CheckBox
          label="Lowercase"
          name="hasLowercase"
          checked={passwordProperties.hasLowercase}
          onChange={handleCheckBoxOnChange}
        />
        <CheckBox
          label="Uppercase"
          name="hasUppercase"
          checked={passwordProperties.hasUppercase}
          onChange={handleCheckBoxOnChange}
        />
        <CheckBox
          label="Symbols"
          name="hasSymbol"
          checked={passwordProperties.hasSymbol}
          onChange={handleCheckBoxOnChange}
        />
      </div>
      <p id="description">Password length</p>
      <LengthSlider
        value={passwordProperties.length}
        onChange={handleRangeOnChange}
      />
      <div id="button-container">
        <button onClick={handleGeneratePassword}>Generate</button>
      </div>
    </>
  );
};
