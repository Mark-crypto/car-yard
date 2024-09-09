import React, { useState } from "react";
const transmissions = ["Manual", "CVT", "Automatic"];
const years = [2019, 2020, 2021, 2022];
const colors = ["silver", "white", "red", "blue", "black", "gray", "green"];

export const SideBar = ({ data, setData }) => {
  const [color, setColor] = useState(new Array(colors.length).fill(false));
  const [transmission, setTransmission] = useState(
    new Array(transmissions.length).fill(false)
  );
  const [year, setYear] = useState(new Array(years.length).fill(false));
  const [filter, setFilter] = useState(data);
  //const [everyFilter, setEveryFilter] = useState([]);

  const handleYear = (index) => {
    const newYear = [...year];
    newYear[index] = !year[index]; // Toggle the checkbox state
    let selectedYears = years.filter((_, i) => newYear[i] === true); // Get all checked years
    //setEveryFilter([...selectedYears]);
    //console.log(everyFilter);

    if (selectedYears.length === 0) {
      // If no checkboxes are checked, show all data
      setData(filter);
    } else {
      // If some checkboxes are checked, filter the data accordingly
      const filteredData = filter.filter((car) =>
        selectedYears.includes(parseInt(car.year))
      );
      filteredData.sort((a, b) => {
        return a.year - b.year;
      });
      console.log(filteredData);
      setData(filteredData);
    }

    setYear(newYear); // Update the checkbox states
  };

  const handleTransmission = (index) => {
    const newTransmission = [...transmission];
    newTransmission[index] = !transmission[index];
    let selectedTransmissions = transmissions.filter(
      (_, i) => newTransmission[i] === true
    );
    //setEveryFilter({ ...everyFilter, ...selectedTransmissions });
    //console.log(everyFilter);

    if (selectedTransmissions.length === 0) {
      setData(filter);
    } else {
      const filteredData = filter.filter((car) => {
        return selectedTransmissions.includes(car.transmission);
      });
      filteredData.sort((a, b) => {
        return a.transmission.localeCompare(b.transmission);
      });
      console.log(filteredData);
      setData(filteredData);
    }
    setTransmission(newTransmission);
  };

  const handleColor = (index) => {
    const newColor = [...color];
    newColor[index] = !color[index];
    let selectedColors = colors.filter((_, i) => newColor[i] === true);
    //setEveryFilter({ ...everyFilter, ...selectedColors });
    //console.log(everyFilter);

    if (selectedColors.length === 0) {
      setData(filter);
    } else {
      const filteredData = filter.filter((car) => {
        return selectedColors.includes(car.color.toLowerCase());
      });
      console.log(filteredData);
      filteredData.sort((a, b) => {
        return a.color.localeCompare(b.color);
      });
      setData(filteredData);
    }
    setColor(newColor);
  };
  return (
    <div>
      <div>
        <h4>Filter by year</h4>
        <ul>
          {years.map((value, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={value}
                value={value}
                checked={year[index]}
                onChange={() => handleYear(index)}
              />
              &nbsp;
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Filter by price</h4>
        <ul>
          {transmissions.map((value, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={value}
                value={value}
                checked={transmission[index]}
                onChange={() => handleTransmission(index)}
              />
              &nbsp;
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Filter by color</h4>
        <ul>
          {colors.map((value, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={value}
                name={value}
                checked={color[index]}
                onChange={() => handleColor(index)}
              />
              &nbsp;
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
