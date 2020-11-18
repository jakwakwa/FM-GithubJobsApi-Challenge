import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("City, State/Province");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
        {/* fix prettier to work on save */}
      </form>
    </div>
  );
};

export default SearchParams;
