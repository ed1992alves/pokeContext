
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import {ProductContext} from "../../context/ProductContext";

const Category = (props) => {
  const { id } = useParams();


  //console.log(useContext(ProductContext))
  const {products, addProduct} = useContext(ProductContext);
  //console.log(addProduct)


  useEffect (() =>{
    fetch(`https://pt.openfoodfacts.org/categoria/${id}?json=true`)
        .then((response) => response.json())
        .then(
          (data) => {
            addProduct(data.products);
          }
        )
        .catch(
            (data) => {console.log(data)}
        )
  }, [id])

  console.log(products)
  return (
    <div>
        {products.map((product) => {
            <p>{product.product_name}</p>
        })}
    </div>
  );
};

export default Category;
