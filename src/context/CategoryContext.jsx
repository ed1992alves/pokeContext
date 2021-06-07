import React, { createContext, useState } from "react";

const initialCategory = [];
const numberOfProductsByPage = 10;

export const CategoryContext = createContext(initialCategory);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = () => {
    fetch("https://pt.openfoodfacts.org/categories?json=true")
      .then((response) => response.json())
      .then((response) => {
        setCategories(response.tags.slice(0, 19));
      });
  };

  const filterCategories = (regex) => {
    if (categories) {
      return categories.filter((category) =>
        category.name.toLowerCase().match(regex.toLowerCase())
      );
    }
    return [];
  };

  const getCategoryByName = (name) =>
    categories.filter((category) => category.name === name);

  const getCategoryById = (id) =>
    categories
      ? categories.filter(
          (category) =>
            category.url.substring(category.url.lastIndexOf("/") + 1) === id
        )
      : null;

  const setProductsIdsByCategoryId = (categoryId, ids) => {
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;
    const changedCategory = categoryById[0];
    changedCategory.ids = ids;
    changedCategory.actualPage = 1;
<<<<<<< HEAD
    changedCategory.totalPages = Math.ceil(ids.length / numberOfProductsByPage);
=======
    changedCategory.totalPages = Math.trunc(
      ids.length / numberOfProductsByPage
    );
>>>>>>> 52ebd43b0ebb289b5afa0ab6c00eade56bef9525
    setCategories([...categories]);
  };

  const changeActualPage = (categoryId, newActualPage) => {
    console.log(categoryId, newActualPage);
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;

    const changedCategory = categoryById[0];
    changedCategory.actualPage = newActualPage;

    setCategories([...categories]);
  };

  const getActualPageByCategoryId = (categoryId) => {
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;

    const changedCategory = categoryById[0];

    return changedCategory.actualPage;
  };

  const getTotalPagesByCategoryId = (categoryId) => {
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;

    const changedCategory = categoryById[0];

    return changedCategory.totalPages;
  };

  const getProductsIdsByCategoryId = (categoryId) => {
    const categoryById = getCategoryById(categoryId);

    if (!categoryById || !categoryById.length) return [];

    console.log(categoryById[0].ids ? categoryById[0].ids : []);

    return categoryById[0].ids ? categoryById[0].ids : [];
  };

  const getProductsIdsByCategoryIdAndPage = (categoryId) => {
<<<<<<< HEAD
    const allProducts = getProductsIdsByCategoryId(categoryId);

    const page = getActualPageByCategoryId(categoryId);
    const firstProductByPage = (page - 1) * numberOfProductsByPage;

    return allProducts.slice(
      firstProductByPage,
      firstProductByPage + numberOfProductsByPage
    );
=======
    const products = getProductsIdsByCategoryId(categoryId);
    const atualPage = getActualPageByCategoryId(categoryId);
    const start = (numberOfProductsByPage - 1) * atualPage;

    return products.slice(start, numberOfProductsByPage + start);
>>>>>>> 52ebd43b0ebb289b5afa0ab6c00eade56bef9525
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        fetchCategories,
        filterCategories,
        selectedCategory,
        setSelectedCategory,
        setProductsIdsByCategoryId,
        getCategoryById,
        getProductsIdsByCategoryId,
        changeActualPage,
        getActualPageByCategoryId,
        getTotalPagesByCategoryId,
        getProductsIdsByCategoryIdAndPage,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
