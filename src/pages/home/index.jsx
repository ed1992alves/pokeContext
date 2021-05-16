import React from "react";
import { useEffect, useState } from "react";

import "./index.less";

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
