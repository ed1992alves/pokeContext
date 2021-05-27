import React, {useState, useEffect, useContext} from 'react';
import SearchInput from '../../components/searchInput';
import {CategoryContext} from '../../context/CategoryContext';
<<<<<<< HEAD

import "./styles.less";
=======
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(null)
    const {categories, fetchCategories, filterCategories} = useContext(CategoryContext)
<<<<<<< HEAD
    const [filteredCategories, setFilteredCategories] = useState([])
=======
    const [filteredCategories, setFilteredCategories] = useState(categories)
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)

    useEffect(()=> {
        if(categories) return
        fetchCategories()
    }, [])

<<<<<<< HEAD
    useEffect(()=> {
        setFilteredCategories(categories)
    }, [categories])

=======
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
    useEffect(() => {
        if(!searchTerm) {
            setFilteredCategories(categories)
            return 
        }
<<<<<<< HEAD
        setFilteredCategories(filterCategories(searchTerm))
=======
       filterCategories(searchTerm)
>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
    }, [searchTerm])


    return (
        <>
<<<<<<< HEAD
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
=======
           Search
           <SearchInput setSearchTerm ={setSearchTerm}></SearchInput>


>>>>>>> 3e49bc5 (exercise : creating a page for an specific product)
        </>
    );
}

export default Search;