import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const Button = (props) => {
    const {text,chevron,disabled,onClickCallback}=props;

<<<<<<< HEAD
    return (
        <button className={disabled?"disabled":""} disabled={disabled} onClick={() => onClickCallback()}>
            <div className={chevron && chevron=="left"?"chevron-reverse btn-container chevron " + chevron:"chevron btn-container chevron " + chevron}>
                <label className="btn" >{text}</label>
            </div>
        </button>
=======
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
>>>>>>> 52ebd43 (pagination)
    );
};

export default Button;