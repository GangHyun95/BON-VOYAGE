import React from "react";

const CateList = ({ filters, filter, onFilterChange }) => {
  return (
    <ul className="flex flex-wrap justify-center mt-4 text-sm">
      {filters.map((value, index) => (
        <li
          key={index}
          className={`px-6 py-3 cursor-pointer ${
            filter === value && "bg-main text-white"
          }`}
          onClick={() => onFilterChange(value)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default CateList;
