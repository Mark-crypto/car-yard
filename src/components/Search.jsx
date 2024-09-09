import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./components.css";

export const Search = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredSearch = search.filter((car) => {
      return car.make.toLowerCase().includes(searchTerm.toLowerCase());
    });

    console.log(filteredSearch);
    filteredSearch.sort((a, b) => a.model.localeCompare(b.model));
    setData(filteredSearch);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button type="submit">
          <CiSearch className="search-icon" />
        </button>
      </form>
    </>
  );
};
