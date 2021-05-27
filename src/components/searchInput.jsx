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