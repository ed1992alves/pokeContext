<<<<<<< HEAD
import React, { useContext, useEffect } from "react";

import {CategoryContext} from "../../context/CategoryContext"
import {Link}  from "react-router-dom";

import "./styles.less";
=======
import React from "react";
import { useEffect, useState } from "react";
>>>>>>> cb2e6d9 (home page done)

import "./index.less";

<<<<<<< HEAD
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
      {!categories && 
        <div>Loading</div>
      }
      <div className="categorys-list">
        {categories && categories?.map((category, index) => (
      
          <Link to={`category/${getCategoryId(category.url)}`} onClick={() => setSelectedCategory(category.name)}  key={category + index}><div>{category.name}</div></Link>
        ))}
      </div>
    </div>
  );
};
=======
export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("https://pt.openfoodfacts.org/categories.json", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => setCategoriesList(result.tags))
        .catch((response) => {
          console.log(response);
        });
    }
    fetchData();
  }, []);
>>>>>>> cb2e6d9 (home page done)

  return (
    <div className="table-page">
      <h1 className="table-title">Categories</h1>
      <div className="table-container">
        <table className="table-results">
          <tbody>
            <tr className="table-body" key="">
              <th>Id </th>
              <th className="number-center">Known </th>
              <th>Name </th>
              <th className="number-center">Products </th>
              <th>Url </th>
            </tr>
            {categoriesList
              .map((tags) => {
                return (
                  <tr className="table-body" key={tags.id}>
                    <td> {tags.id} </td>
                    <td className="number-center"> {tags.known} </td>
                    <td> {tags.name} </td>
                    <td className="number-center"> {tags.products} </td>
                    <td> {tags.url} </td>
                  </tr>
                );
              })
              .slice(1, 20)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
