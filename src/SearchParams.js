import React from 'react';

const SearchParams = () => {
  const location = "Unknown, Unknown";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location
          <input id="location" value={location} placeholder="Location"  />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;