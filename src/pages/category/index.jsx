import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.less";

import { ProductContext } from "../../context/ProductContext";
import { CategoryContext } from "../../context/CategoryContext";

const Category = (props) => {
  const { id } = useParams();

  const { products, addProducts, getFilteredProducts } =
    useContext(ProductContext);
  const {
    categories,
    getCategoryById,
    setProductsIdsByCategoryId,
    fetchCategories,
    getProductsIdsByCategoryId,
  } = useContext(CategoryContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [fetchedProducts, setFetchProducts] = useState(false);

  useEffect(() => {
    if (categories) return;
    fetchCategories();
  }, []);

  useEffect(() => {
    if (fetchedProducts || !categories || getProductsIdsByCategoryId(id))
      return;

    fetch(`https://pt.openfoodfacts.org/categoria/${id}?json=true`)
      .then((response) => response.json())
      .then((data) => {
        let ids = data.products.map((product) => product._id);
        setProductsIdsByCategoryId(id, ids);
        addProducts(data.products);
        setFetchProducts(true);
      })
      .catch((data) => {
        console.log(data);
      });
  }, [categories, fetchedProducts]);

  useEffect(() => {
    if (
      !products ||
      !categories ||
      fetchedProducts ||
      !getProductsIdsByCategoryId(id)
    )
      return;

    setFilteredProducts(getFilteredProducts(getProductsIdsByCategoryId(id)));
  }, [products, categories, fetchedProducts]);

  return (
    <div>
      <div className="products-container">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h3 className="product-title">{product?.product_name}</h3>
            </Link>
            <img
              className="product-img"
              src={product?.image_front_small_url}
              alt="Product Image"
              width="150"
              height="150"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
