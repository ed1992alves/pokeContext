import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const Button = (props) => {
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