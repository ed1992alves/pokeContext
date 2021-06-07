import React, { createContext, useState } from "react";

const initialProduct = [];

export const ProductContext = createContext(initialProduct);

export const ProductProvider = ({ children }) => {
<<<<<<< HEAD
  const [products, setProducts] = useState([]);

  const addProducts = (newProducts) =>
    setProducts([...products, ...filterProducts(newProducts)]);

  const filterProducts = (products) =>
    products.filter((product) => !getProductById(product.id).length);

  const getProductById = (id) => products.filter((product) => product.id == id);

  const getFilteredProducts = (idsToFilter) =>
    products.filter((product) => idsToFilter.includes(product.id));

  return (
    <ProductContext.Provider
      value={{ products, addProducts, getFilteredProducts, getProductById }}
    >
      {children}
=======
    const [products, setProducts] = useState([])

    const addProducts = (newProducts) => setProducts([...products, ...filterProducts(newProducts)])

    const filterProducts = (products) => products.filter(product => !getProductById(product.id).length)

    const getProductById = (id) => products.filter(product => product.id == id)

    const getFilteredProducts = (idsToFilter) => products.filter(product => idsToFilter.includes(product.id))
    
  return (
    <ProductContext.Provider value={{products, addProducts, getFilteredProducts, getProductById}}>
        {children}
>>>>>>> 52ebd43b0ebb289b5afa0ab6c00eade56bef9525
    </ProductContext.Provider>
  );
};
