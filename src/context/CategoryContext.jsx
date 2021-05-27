import React, {createContext, useState} from "react";

const initialCategory = [];

export const CategoryContext = createContext(initialCategory);

export const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState(null)
    const [selectedCategory, setSelectedCategory]=useState(null)

    const fetchCategories =  () => {
          fetch("https://pt.openfoodfacts.org/categories?json=true")
            .then((response) => response.json())
            .then((response) => {
                setCategories(response.tags.slice(0, 19));
            });
    }

    const filterCategories = (regex) => {

        if (categories) {

            return  categories.filter(category => {
                return category.name.toLowerCase().match(regex.toLowerCase());
            })

        }
        return [];
    }

    const getCategoryByName = (name) => categories.filter(category => category.name === name);
    
    const getCategoryById = (id) => categories.filter(category =>  category.url.substring(category.url.lastIndexOf('/') + 1) === id);

    const setProductsIdsByCategoryId = (categoryId, ids) => {
        const changedCategory = getCategoryById(categoryId)[0].ids = ids 
        setCategories([...categories])
    }

    const getProductsIdsByCategoryId = (categoryId) => 
     getCategoryById(categoryId)[0].ids;

 
    return (
        <CategoryContext.Provider value={
            {
                categories, 
                fetchCategories, 
                filterCategories, 
                selectedCategory,
                setSelectedCategory, 
                setProductsIdsByCategoryId, 
                getCategoryById, 
                getProductsIdsByCategoryId
             }}>
            {children}
        </CategoryContext.Provider>

    );
};
