import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const SearchInput = (props) => {
  const { setSearchTerm } = props;
  const { categories } = useContext(CategoryContext);

  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchInput;
