import React from "react";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import instance from "../../api/axios";

const SelectionCard = ({ list, setAlarm, alarm }) => {
  const handleDelete = async () => {
    await instance
      .delete(`/api/schedule/delete?tsseq=${list.tsSeq}`)
      .then((res) => setAlarm(!alarm));
  };

  useEffect(() => {}, []);
  return (
    <article className="flex relative w-10/12 mx-auto my-6 border border-gray-200 rounded-lg h-28">
      <GrClose
        className="absolute top-1.5 right-2 cursor-pointer z-10"
        onClick={handleDelete}
      />
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
    </article>
  );
};

export default SelectionCard;
