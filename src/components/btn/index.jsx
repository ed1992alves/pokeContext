import React from "react";
import "./styles.less";

const Button = (props) => {
  const { text, chevron, disabled, onClickCallback } = props;

  return (
    <button
      className={disabled ? "disabled" : ""}
      disabled={disabled}
      onClick={() => onClickCallback()}
    >
      <div
        className={
          chevron && chevron == "left"
            ? "chevron-reverse btn-container chevron " + chevron
            : "chevron btn-container chevron " + chevron
        }
      >
        <label className="btn">{text}</label>
      </div>
    </button>
  );
};

export default Button;
