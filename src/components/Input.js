import React from "react";
import "../App.css";
function Input(props) {
  return (
    <div>
      <input type="text" id="mood" placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
