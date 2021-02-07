import React from "react";
import "./Header.css";

const Header = ({setSearch}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Type movie name to search"
        onChange={(e) => setSearch(e.target.value)}
   />
    </div>
  );
};

export default Header;