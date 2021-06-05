import React from 'react'

const CategoryInfoPiece = ({ product_name, product_quantity }) => {
  return (
    <ul>
      <li>
        {product_name} {product_quantity}
      </li>
    </ul>
  )
}

export default CategoryInfoPiece
