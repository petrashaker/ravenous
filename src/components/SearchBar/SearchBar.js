import React, { useState } from "react";
import './SearchBar.css';

//properties from yelp documentation https://www.yelp.com/developers/documentation/v3/business_search

export default function SearchBar({searchYelp}) {
    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    //the search term located in the search input
    const [term, setTerm] = useState('');    
    //the search term located in the search input
    const [location, setLocation] = useState(''); 
    //sortBy will represent the selected sorting option to use    
    const [sortBy, setSortBy] = useState('best_match');  
    
    //returns the current CSS class for a sorting option
    const getSortByClass = (sortByOption) => {
        if(sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }
 
    //sets the state of a sorting option
    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption)
    }
  

    //input business
    const handleTermChange = ({target}) => {
        setTerm(target.value)
    }

    //input "Where?"
    const handleLocationChange = ({target}) => {
        setLocation(target.value)
    }   

    //enable console.log (Searching Yelp in App.js)
    const handleSearch = (event) => {
        searchYelp(term, location, sortBy);
        event.preventDefault();
    }

    //create li items for ul
    const renderSortByOptions = 
        Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li key={sortByOptionValue} 
                        className={getSortByClass(sortByOptionValue)} 
                        //Using an arrow function in render creates a new function each time the component renders, which may break optimizations based on strict identity comparison.
                        onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                    </li>)            
            }
        )
  

    return ( 
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>{renderSortByOptions}</ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={handleTermChange}/>
                <input placeholder="Where?" onChange={handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}> Let's Go </button>
            </div>
    </div>
    )       
}