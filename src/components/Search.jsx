import React, { useState, useCallback, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import _ from "lodash";
import "./components.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  //capture input
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchItems = async (query) => {
    if (!query) return setQuery("");
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://www.freetestapi.com/api/v1/cars?search=${query}`
      );
      console.log(response.data);
      setSuggestion(response.data);
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(_.debounce(searchItems, 300), []);

  useEffect(() => {
    if (query === "") {
      setSuggestion([]);
      return;
    }
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const getSearchedCar = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setSuggestion([]);
  };

  return (
    <>
      <div className="search">
        <input
          type="search"
          id="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for cars...."
        ></input>

        <button type="button" onClick={() => debouncedSearch(query)}>
          <CiSearch className="search-icon" />
        </button>
      </div>
      <div>
        <ul>
          {!loading && !error && suggestion.length === 0 && query && (
            <p>No cars found.</p>
          )}
          {loading && <h2>Searching...</h2>}
          {error && <h2>{error}</h2>}
          {suggestion
            ? suggestion.map((car) => (
                <li key={car.id}>
                  <div onClick={() => getSearchedCar(car.id)}>
                    {/* car name, year, make, model */}

                    <div className="suggestion-item">
                      <h4>Year:{car.year}</h4>
                      <h4>Model:{car.model}</h4>
                      <h4>Make:{car.make}</h4>
                    </div>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
};
