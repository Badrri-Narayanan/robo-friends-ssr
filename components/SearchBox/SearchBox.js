import React from 'react';

function SearchBox({searchQuery, setSearchQuery}) {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                value={searchQuery}
                type="search"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search robots"
            />
        </div>
    )
}

export default SearchBox;