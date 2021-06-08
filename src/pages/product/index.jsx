import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
      return;
    }

    fetch(`https://world.openfoodfacts.org/api/v0/product/${id}?json=true`)
      .then((response) => response.json())
      .then((response) => {
        addProducts([response.product]);
        setProduct(response.product);
      });
  }, [id]);

  return (
    <>
      <div className="product-container">
        <Link className="back-btn" to={"/"}>
          Back
        </Link>
        {!product && <div className="loading">Loading...</div>}

        {product && (
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
              <p>
                <b>Carbohydrates per 100g:</b>{" "}
                {product?.nutriments.carbohydrates}g
              </p>
              <p>
                <b>Energy:</b> {product?.nutriments.energy}kcal
              </p>
              <p>
                <b>Fat:</b> {product?.nutriments.fat}g
              </p>
              <p>
                <b>Fiber:</b> {product?.nutriments.fiber}g
              </p>
              <p>
                <b>Proteins:</b> {product?.nutriments.proteins}g
              </p>
              <p>
                <b>Sugars:</b> {product?.nutriments.sugars}g
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
