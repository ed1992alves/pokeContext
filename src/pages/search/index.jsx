import React, {useState, useEffect, useContext} from 'react';
import SearchInput from '../../components/searchInput';
import {CategoryContext} from '../../context/CategoryContext';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(null)
    const {categories, fetchCategories, filterCategories} = useContext(CategoryContext)
    const [filteredCategories, setFilteredCategories] = useState(categories)

    useEffect(()=> {
        if(categories) return
        fetchCategories()
    }, [])

    useEffect(() => {
        if(!searchTerm) {
            setFilteredCategories(categories)
            return 
        }
       filterCategories(searchTerm)
    }, [searchTerm])


    return (
        <>
           Search
           <SearchInput setSearchTerm ={setSearchTerm}></SearchInput>

        </>
    );
}

export default Search;