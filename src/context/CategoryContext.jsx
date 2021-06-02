import React, { createContext, useState } from "react";

const initialCategory = [];
<<<<<<< HEAD
<<<<<<< HEAD
const numberOfProductsByPage = 10;
=======
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
=======
const numberOfProductsByPage = 10;
>>>>>>> 52ebd43 (pagination)

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

<<<<<<< HEAD
<<<<<<< HEAD
            return  categories.filter(category => category.name.toLowerCase().match(regex.toLowerCase()))
=======
            return  categories.filter(category => {
                return category.name.toLowerCase().match(regex.toLowerCase());
            })
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
=======
  const setProductsIdsByCategoryId = (categoryId, ids) => {
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;
    const changedCategory = categoryById[0];
    changedCategory.ids = ids;
    changedCategory.actualPage = 1;
    changedCategory.totalPages = Math.trunc(
      ids.length / numberOfProductsByPage
    );
    setCategories([...categories]);
  };
>>>>>>> 52ebd43 (pagination)

  const changeActualPage = (categoryId, newActualPage) => {
    console.log(categoryId, newActualPage);
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;

<<<<<<< HEAD
    const getCategoryByName = (name) => categories.filter(category => category.name === name);
    
<<<<<<< HEAD
    const getCategoryById = (id) => categories ? categories.filter(category =>  category.url.substring(category.url.lastIndexOf('/') + 1) === id) :  null
        
    
    const setProductsIdsByCategoryId = (categoryId, ids) => {
        const categoryById = getCategoryById(categoryId)
        if(!categoryById ) return 
        const changedCategory = categoryById [0]
        changedCategory.ids = ids;
        changedCategory.actualPage = 1;
        changedCategory.totalPages = Math.ceil(ids.length / numberOfProductsByPage);
        setCategories([...categories])
    }
    
    const changeActualPage = (categoryId, newActualPage) => {
        console.log(categoryId, newActualPage)
        const categoryById = getCategoryById(categoryId)
        if(!categoryById ) return 

        const changedCategory = categoryById [0]
        changedCategory.actualPage = newActualPage;

        setCategories([...categories]);
    }

    const getActualPageByCategoryId = (categoryId) => {
        const categoryById = getCategoryById(categoryId)
        if(!categoryById ) return 

        const changedCategory = categoryById [0]
        
        return changedCategory.actualPage;
    }

    const getTotalPagesByCategoryId = (categoryId) => {
        const categoryById = getCategoryById(categoryId)
        if(!categoryById ) return 

        const changedCategory = categoryById [0]
        
        return changedCategory.totalPages;
    }

    const getProductsIdsByCategoryId = (categoryId) =>  {

       const categoryById = getCategoryById(categoryId)

       if(!categoryById || !categoryById.length) return []

       console.log(categoryById[0].ids ? categoryById[0].ids : [])

       return categoryById[0].ids ? categoryById[0].ids : []; 
    }

    const getProductsIdsByCategoryIdAndPage = (categoryId) =>  {

        const allProducts = getProductsIdsByCategoryId(categoryId)

        const page = getActualPageByCategoryId(categoryId)
        const firstProductByPage = (page-1) * numberOfProductsByPage;

        return allProducts.slice(firstProductByPage, firstProductByPage + numberOfProductsByPage)
    }
=======
    const getCategoryById = (id) => categories.filter(category =>  category.url.substring(category.url.lastIndexOf('/') + 1) === id);
=======
    const changedCategory = categoryById[0];
    changedCategory.actualPage = newActualPage;
>>>>>>> 52ebd43 (pagination)

    setCategories([...categories]);
  };

<<<<<<< HEAD
    const getProductsIdsByCategoryId = (categoryId) => 
     getCategoryById(categoryId)[0].ids;
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)

 
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
<<<<<<< HEAD
                getProductsIdsByCategoryId,
                changeActualPage,
                getActualPageByCategoryId, 
                getTotalPagesByCategoryId,
                getProductsIdsByCategoryIdAndPage
=======
                getProductsIdsByCategoryId
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
             }}>
            {children}
        </CategoryContext.Provider>
=======
  const getActualPageByCategoryId = (categoryId) => {
    const categoryById = getCategoryById(categoryId);
    if (!categoryById) return;
>>>>>>> 52ebd43 (pagination)

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
    const products = getProductsIdsByCategoryId(categoryId);
    const atualPage = getActualPageByCategoryId(categoryId);
    const start = (numberOfProductsByPage - 1) * atualPage;

    return products.slice(start, numberOfProductsByPage + start);
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
