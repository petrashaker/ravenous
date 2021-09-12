import React, { useState } from "react";
import './SearchBar.css';

//properties from yelp documentation https://www.yelp.com/developers/documentation/v3/business_search

//codecacemy body 28 - 43   

// const sortByOptions = {
//     'Best Match': best_match,
//     'Highest Rated': rating,
//     'Most Reviewed': review_count
// }

//    function renderSortByOptions() { 
//     Object.keys(sortByOptions)
//     .map(sortByOption => {
//         let sortByOptionValue = sortByOptions[sortByOption];
//     })
// }


//zakomentováno, protože React hlásí chyby v renderu, nicméně stejně třeba dořešit
export default function SearchBar() {
    const [sortByOptions] = useState({
        'Best Match':  'Chosen restaurean',
        'Highest Rated': 5,
        'Most Reviewed': 23
        // 'Best Match': best_match,
        // 'Highest Rated': rating,
        // 'Most Reviewed': review_count
    });
    const renderSortByOptions = (sortByOptions) => { 
        sortByOptions.keys
        .map(sortByOption => 
            <li key={sortByOption}>{sortByOptions[sortByOption]}</li>
        )
    }

    return ( 
        <div className="SearchBar">
            <div class="SearchBar-sort-options">
                <ul>{renderSortByOptions}</ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
    </div>
)       
}