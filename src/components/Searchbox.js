import React from "react";
import 'tachyons'

const SearchBox = ({searchChange}) => {
    return (
        <input type="text" placeholder="search robots" className="pa3 ba b--green bg-lightest-blue" onChange={searchChange} />  
    )
}

export default SearchBox;