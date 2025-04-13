import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./components.css";
const vehicles = [
  "Audi",
  "Mazda",
  "Mercedes",
  "Toyota",
  "Tesla",
  "BMW",
  "Bugatti",
  "Auris",
];

export const Search = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState(data);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const filteredSearch = search.filter((car) => {
  //     return car.make.toLowerCase().includes(searchTerm.toLowerCase());
  //   });

  //   console.log(filteredSearch);
  //   filteredSearch.sort((a, b) => a.model.localeCompare(b.model));
  //   setData(filteredSearch);
  // };
  const handleClick = (search) => {
    setSearch(search);
    //onclick of div and button
  };

  return (
    <div className="search">
      <input
        type="search"
        id="search"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>

      <button type="button" onClick={() => handleClick(search)}>
        <CiSearch className="search-icon" />
      </button>
      {filteredData
        .filter((item) => {
          const searchWord = searchTerm.toLowerCase();
          const itemLower = item.make.toLowerCase();
          return (
            searchWord &&
            itemLower.startsWith(searchWord) &&
            itemLower !== searchWord
          );
        })
        .slice(0, 10)
        .map((car) => {
          return (
            <div key={car.id} onClick={() => handleClick(car.make)}>
              {car.make}
            </div>
          );
        })}
    </div>
  );
};
