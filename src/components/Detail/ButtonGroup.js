import React from "react";

const ButtonGroup = ({ filters, arr, setFilter }) => {
  return (
    <div className="inline-flex" role="group">
      {arr.map((item, index) => (
        <button
          type="button"
          className={`px-6 py-2 my-3 text-main text-xs leading-tight ${
            filters === item.title && "bg-blue-200"
          }`}
          key={index}
          onClick={() => {
            setFilter(item.title);
          }}
        >
          <div className="relative flex items-center gap-1">
            <p className="text-xs">{item.title}</p>
            <div>{item.icon}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
