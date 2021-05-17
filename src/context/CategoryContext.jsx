import React, {createContext, useState} from "react";

const initialCategory = [];

export const CategoryContext = createContext(initialCategory);

export const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState(null)


    const fetchCategories = () => {
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

    return (
        <CategoryContext.Provider value={{categories, fetchCategories, filterCategories}}>
            {children}
        </CategoryContext.Provider>

    );
};
