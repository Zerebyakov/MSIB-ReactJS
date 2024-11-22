import { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query); 
            setQuery('');
        }
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
                type="text"
                className="form-control"
                placeholder="Search movies..."
                aria-label="Search" 
                aria-describedby="button-addon2"
                value={query}
                onChange={handleInputChange}
            />
            <button className="btn btn-dark mx-2" type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;
