import React, { createContext, useState } from "react";

const initialProduct = [];

export const ProductContext = createContext(initialProduct);

export const ProductProvider = ({ children }) => {
    const [products, setProduct] = useState([])

    const addProduct = (product) => {
        let newProducts = [...products, product]
        setProduct(setProduct)
    }

  return (
    <ProductContext.Provider value={{products, addProduct}}>
        {children}
    </ProductContext.Provider>
  );
};
