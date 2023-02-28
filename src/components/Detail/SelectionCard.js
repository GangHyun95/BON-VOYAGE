import React from "react";
import { GrClose } from "react-icons/gr";
import instance from "../../api/axios";

const SelectionCard = ({ list }) => {
  console.log(list.tsSeq);
  const handleDelete = async () => {
    await instance.delete(`/api/schedule/delete?tsseq=${list.tsSeq}`);
  };
  return (
    <li
      className="flex relative w-10/12 mx-auto my-6 border border-gray-200 rounded-lg h-28 cursor-pointer"
      onClick={handleDelete}
    >
      <button className="absolute top-1.5 right-2">
        {" "}
        <GrClose />
      </button>

      <img
        className="w-20 md:h-auto object-cover md:w-28 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={list.tpImage}
        alt={list.tpName}
      />
      <div className="relative p-4 flex flex-col flex-1">
        <p className="text-gray-700 text-[13px] font-bold mb-2 line-clamp-2 ">
          {list.tpName}
        </p>
        <p className=" text-gray-400 text-[11px]">{list.tpAdress}</p>
      </div>
    </li>
  );
};

export default SelectionCard;
