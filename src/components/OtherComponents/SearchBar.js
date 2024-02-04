import React from "react";

const SearchBar = ({ keyword, setKeyword, setIsSearched }) => {
  const BarStyling = {
    width: "40rem",
    background: "transparent",
    color: "black",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "0.5px",
    borderRadius: "10px",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Търсене..."}
      onChange={(e) => {
        setKeyword(e.target.value);
        setIsSearched(true);
      }}
    />
  );
};

export default SearchBar;
