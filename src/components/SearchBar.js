import React from 'react';
import './SearchBar.css';

const searchBar = () => {
    return (
        <>
         <form className="searchBarConatiner">
             <input type="search" className="searchBar" placeholder="SEARCH YOUR FAVORITE MOVIE" />
         </form>
        </>
    )
}

export default searchBar;