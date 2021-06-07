import React, {useState, useEffect, useContext} from 'react';
import SearchInput from '../../components/searchInput';
import {CategoryContext} from '../../context/CategoryContext';

import "./styles.less";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(null)
    const {categories, fetchCategories, filterCategories} = useContext(CategoryContext)
    const [filteredCategories, setFilteredCategories] = useState([])

    useEffect(()=> {
        if(categories) return
        fetchCategories()
    }, [])

    useEffect(()=> {
        setFilteredCategories(categories)
    }, [categories])

    useEffect(() => {
        if(!searchTerm) {
            setFilteredCategories(categories)
            return 
        }
        setFilteredCategories(filterCategories(searchTerm))
    }, [searchTerm])


    return (
        <>
            <div className="search">
                <h3>
                    Search:
                    <SearchInput className="SearchInput" setSearchTerm ={setSearchTerm}></SearchInput>
                </h3>
           </div>
            <div className="search-category">
            {
                filteredCategories?.map((category) => (
                    <div className="search-result" key={category.id}>
                        <a href={"/category/" + category.url.substring(category.url.lastIndexOf('/') + 1)}>{category.name}</a>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Search;