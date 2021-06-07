import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";
import { CategoryContext } from "../../context/CategoryContext";

import Button from "../../components/btn";
import CurrentPage from "../../components/currentPage";

import "./styles.less";

const Category = (props) => {
  const { id } = useParams();

  const { products, addProducts, getFilteredProducts } =
    useContext(ProductContext);
  const {
    categories,
    setProductsIdsByCategoryId,
    fetchCategories,
    getProductsIdsByCategoryId,
    getTotalPagesByCategoryId,
    getActualPageByCategoryId,
    changeActualPage,
    getProductsIdsByCategoryIdAndPage,
  } = useContext(CategoryContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categories) return;
    fetchCategories();
  }, []);

  useEffect(() => {
    if (getProductsIdsByCategoryId(id).length) return;

    fetch(`https://pt.openfoodfacts.org/categoria/${id}?json=true`)
      .then((response) => response.json())
      .then((data) => {
        let ids = data.products.map((product) => product._id);
        setProductsIdsByCategoryId(id, ids);
        addProducts(data.products);
      })
      .catch((data) => {
        console.log(data);
      });
  }, [categories]);

  useEffect(() => {
    if (!products || !categories) return;

    setFilteredProducts(
      getFilteredProducts(getProductsIdsByCategoryIdAndPage(id))
    );
  }, [products, categories]);

  return (
    <div className="wrapper">
      <div className="products-container">
        {filteredProducts?.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <h3 className="product-title">{product?.product_name}</h3>
            <img
              className="product-img"
              src={product?.image_front_small_url}
              alt="Product Image"
              width="150"
              height="150"
            ></img>
          </Link>
        ))}
      </div>
      <div className="products-pagination-btn-container">
        <Button
          onClickCallback={() =>
            changeActualPage(id, getActualPageByCategoryId(id) - 1)
          }
          text="prev"
          chevron="left"
          disabled={getActualPageByCategoryId(id) == 1}
        />
        <CurrentPage
          actualPage={getActualPageByCategoryId(id)}
          totalPages={getTotalPagesByCategoryId(id)}
        />
        <Button
          onClickCallback={() =>
            changeActualPage(id, getActualPageByCategoryId(id) + 1)
          }
          text="next"
          chevron="right"
          disabled={
            getActualPageByCategoryId(id) == getTotalPagesByCategoryId(id)
          }
        />
      </div>
    </div>
  );
};

export default Category;
