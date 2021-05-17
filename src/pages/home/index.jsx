import React, { useContext, useEffect } from "react";

import {CategoryContext} from "../../context/CategoryContext"

const Home = () => {

  const {categories, fetchCategories}  = useContext(CategoryContext)

  useEffect(()=> {
    if(categories) return
    fetchCategories()
  }, [])

  return (
    <div>
      {!categories && 
        <div>Loading</div>
      }
      {categories && categories?.map((category, index) => (
        <div key={category + index}>{category.name}</div>
      ))}
    </div>
  );
};

export default Home;