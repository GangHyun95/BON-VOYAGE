import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchForm = ({ keyword, setKeyword }) => {
  const handleChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="relative text-2xl text-gray-400" onClick={handleSubmit}>
      <input
        type="text"
        className="w-full h-16 outline-none border rounded-3xl py-4 px-6"
        value={keyword}
        onChange={handleChange}
      />
      <button>
        <CiSearch className="absolute top-1/2 right-3 translate-y-[-50%] text-main" />
      </button>
    </form>
  );
};

export default SearchForm;
