import React from "react"

const Card = (props) => {
    const {name, image, about} = props;
    return (
        <div className="about_card">
            <img className="img_card" src={image} alt={name}/>
            <h3>
                {name}
            </h3>
            <p>
                {about}
            </p>
        </div>
    );
}

export default Card;