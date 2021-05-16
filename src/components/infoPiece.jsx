import React from 'react';

const InfoPiece = ({name, products}) => {

    return (
        <ul>
            <li>{name} ({products})</li>
        </ul>
    )
  }
  
  export default InfoPiece;