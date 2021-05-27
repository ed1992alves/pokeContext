import React, { createContext, useState } from "react";

const initialProduct = [];

export const ProductContext = createContext(initialProduct);

export const ProductProvider = ({ children }) => {
<<<<<<< HEAD
    const [products, setProducts] = useState([])

    const addProducts = (newProducts) => setProducts([...products, ...filterProducts(newProducts)])

    const filterProducts = (products) => products.filter(product => !getProductById(product.id).length)

    const getProductById = (id) => products.filter(product => product.id == id)

    const getFilteredProducts = (idsToFilter) => products.filter(product => idsToFilter.includes(product.id))
    
  return (
    <ProductContext.Provider value={{products, addProducts, getFilteredProducts, getProductById}}>
        {children}
=======
  const [products, setProducts] = useState([]);

  const addProducts = (newProducts) =>
    setProducts([...products, ...filterProducts(newProducts)]);

  const filterProducts = (products) =>
    products.filter((product) => !getProductById(product.__id).length);

  const getProductById = (id) =>
    products.filter((product) => (product._id = id));

  const getFilteredProducts = (idsToFilter) =>
    products.filter((product) => idsToFilter.includes(product.id));

  return (
    <ProductContext.Provider
      value={{ products, addProducts, getFilteredProducts }}
    >
      {children}
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
    </ProductContext.Provider>
  );
};
