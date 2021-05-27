import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";

import "./styles.less";

const Product = () => {
  const { id } = useParams();
  const { getFilteredProducts } = useContext(ProductContext);

  const [product, setProduct] = useState([]);
  const [fetchedProduct, setFetchProduct] = useState(false);

  useEffect(() => {
    if (fetchedProduct || getFilteredProducts(id)[0]) return;

    fetch(`https://world.openfoodfacts.org/api/v0/product/${id}?json=true`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.product);
        setProduct(response.product);
        setFetchProduct(true);
      });
  }, [fetchedProduct]);

  useEffect(() => {
    if (!product || fetchedProduct || !getFilteredProducts(id)[0]) return;

    setProduct(getFilteredProducts(id)[0]);
  }, [product, fetchedProduct]);

  return (
    <div className="product-container">
      {product ? (
        <div className="product">
          <img
            className="img"
            src={product?.image_front_small_url}
            alt="Product Image"
            width="300"
            height="300"
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
  );
};

export default Product;
