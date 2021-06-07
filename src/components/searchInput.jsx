<<<<<<< HEAD
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
=======
import React from "react";

const SearchInput = (props) => {
    const {setSearchTerm} = props

        return(
        <>
            <form>
                <label>
                    Category:
                    <input type="text"  onChange={(event) => setSearchTerm(event.target.value)} />
                </label>    
            </form>   
        </>
        )
}

export default SearchInput;
>>>>>>> 52ebd43b0ebb289b5afa0ab6c00eade56bef9525
