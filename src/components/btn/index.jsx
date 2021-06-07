import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const Button = (props) => {
<<<<<<< HEAD
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
=======
    const {text,chevron,disabled,onClickCallback}=props;

    console.log(onClickCallback)

    return (
        <div className={chevron && chevron=="left"?"chevron-reverse":"btn-container"}>
            
            <button className="btn" disabled={disabled} onClick={() => onClickCallback()}>{text}</button>
            {chevron?
                <span className={disabled?"disabled chevron " + chevron:"chevron " + chevron  }></span>
                :
                ""
            }
            
        </div>
    );
};

export default Button;
>>>>>>> 52ebd43b0ebb289b5afa0ab6c00eade56bef9525
