import React, { createContext, useState } from "react";

const initialProduct = [];

export const ProductContext = createContext(initialProduct);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProducts = (newProducts) => setProducts([...products, ...filterProducts(newProducts)])

    const filterProducts = (products) => products.filter(product => !getProductById(product.id).length)

    const getProductById = (id) => products.filter(product => product.id == id)

    const getFilteredProducts = (idsToFilter) => products.filter(product => idsToFilter.includes(product.id))
    
  return (
    <ProductContext.Provider value={{products, addProducts, getFilteredProducts, getProductById}}>
        {children}
    </ProductContext.Provider>
  );
};
