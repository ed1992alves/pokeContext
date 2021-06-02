<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import "./index.less";

const Product = () => {
  const { id } = useParams();
  const { getProductById, addProducts } = useContext(ProductContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productById = getProductById(id)[0];

    if (productById) {
      setProduct(productById);
      console.log(product);
      return;
    }

    fetch(`https://world.openfoodfacts.org/api/v0/product/${id}?json=true`)
      .then((response) => response.json())
      .then((response) => {
        addProducts([response.product]);
        setProduct(response.product);
      });
  }, [id]);
=======
import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import {ProductContext} from "../../context/ProductContext"
import "./index.less";

const Product = () => {


    const { id } = useParams();
    const { getProductById, addProducts } = useContext(ProductContext);

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const productById = getProductById(id)[0]


        if(productById) {
          setProduct(productById);
          console.log(product);
          return; 
        }

        fetch(`https://world.openfoodfacts.org/api/v0/product/${id}?json=true`)
        .then(response => response.json())
        .then(response => {
          addProducts([response.product]);
          setProduct(response.product);
        })
    
      }
    , [id])

>>>>>>> 52ebd43 (pagination)

    return (
        <div className="product-container">
      {product ? (
        <div className="product">
          <img
            className="img"
            src={product.image_front_small_url}
            alt="Product Image"
          ></img>
          <div className="product-description">
            <p>{product.product_name}</p>
            <p>
              <b>Brand:</b> {product?.brands}
            </p>
            <p>
              <b>Quantity:</b> {product?.product_quantity}g
            </p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
    )
}

export default Product;
