import React, { useContext, useEffect } from "react";

import { CategoryContext } from "../../context/CategoryContext";
import { Link } from "react-router-dom";

import "./styles.less";

const Home = () => {
  const getCategoryId = (url) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  const { categories, fetchCategories, setSelectedCategory } =
    useContext(CategoryContext);

  useEffect(() => {
    if (categories) return;
    fetchCategories();
  }, []);

  return (
    <div className="categorys-list">
      {!categories && <div className="loading">Loading...</div>}

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
    </div>
  );
};

export default Home;
