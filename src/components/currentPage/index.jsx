import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const CurrentPage = (props) => {
    const {actualPage, totalPages}=props;

    return (
        <div className="current-page">
            {actualPage}/{totalPages}
        </div>
    );
};

export default CurrentPage;