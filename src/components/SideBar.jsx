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

  const handleYear = (index) => {
    const newYear = [...year];
    newYear[index] = !year[index];
    let selectedYears = years.filter((_, i) => newYear[i] === true);

    if (selectedYears.length === 0) {
      setData(filter);
    } else {
      const filteredData = filter.filter((car) =>
        selectedYears.includes(parseInt(car.year))
      );
      filteredData.sort((a, b) => {
        return a.year - b.year;
      });
      setData(filteredData);
    }

    setYear(newYear);
  };

  const handleTransmission = (index) => {
    const newTransmission = [...transmission];
    newTransmission[index] = !transmission[index];
    let selectedTransmissions = transmissions.filter(
      (_, i) => newTransmission[i] === true
    );
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
