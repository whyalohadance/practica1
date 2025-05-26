import React from 'react';

const SearchBox = () => {
  return (
    <div className="appointment-search-cantainer">
      <h3>Gaseste cea mai buna ingrejire</h3>

      <div className="appointment-search">
        <div className="appo-search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Cautati Doctorul aici" />
        </div>

        <div className="appo-search-box">
          <i className="fa-solid fa-location-dot"></i>
          <input type="text" placeholder="Locatia dumneavoastra" />
        </div>

        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;