import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  return (
    <form className="relative text-2xl text-[#999]">
      <input
        type="text"
        className="w-full h-16 outline-none border rounded-3xl p-4"
      />
      <CiSearch className="absolute top-2/4 right-3 translate-y-[-50%] text-main" />
    </form>
  );
};

export default SearchForm;
