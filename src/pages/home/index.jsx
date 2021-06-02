import React, { useContext, useEffect } from "react";

import {CategoryContext} from "../../context/CategoryContext"
import {Link}  from "react-router-dom";

import "./styles.less";

import "./styles.less";

const Home = () => {

  const getCategoryId = (url) => {
    
    return url.substring(url.lastIndexOf('/') + 1);
  }

  const {categories, fetchCategories, setSelectedCategory}  = useContext(CategoryContext)

  useEffect(()=> {
    if(categories) return
    fetchCategories()
  }, [])

  return (
    <div>
<<<<<<< HEAD
      {!categories && <div>Loading</div>}
      <div className="categorys-list">
        {categories &&
          categories?.map((category, index) => (
            <Link
              to={`category/${getCategoryId(category.url)}`}
              onClick={() => setSelectedCategory(category.name)}
              key={category + index}
            >
              <div>{category.name}</div>
            </Link>
          ))}
=======
      {!categories && 
        <div>Loading</div>
      }
      <div className="categorys-list">
        {categories && categories?.map((category, index) => (
      
          <Link to={`category/${getCategoryId(category.url)}`} onClick={() => setSelectedCategory(category.name)}  key={category + index}><div>{category.name}</div></Link>
        ))}
>>>>>>> 52ebd43 (pagination)
      </div>
    </div>
  );
};

export default Home;