import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  return (
    <form className="relative text-2xl text-gray-400">
      <input
        type="text"
        className="w-full h-16 outline-none border rounded-3xl py-4 px-6"
      />
      <CiSearch className="absolute top-1/2 right-3 translate-y-[-50%] text-main" />
    </form>
  );
};

export default SearchForm;
