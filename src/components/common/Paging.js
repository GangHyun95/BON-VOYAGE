import React from "react";
import Pagination from "react-js-pagination";
import "../style/Paging.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Paging = ({ page, count, setPage }) => {
  return (
    <>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={<MdArrowBackIos />}
        nextPageText={<MdArrowForwardIos />}
        onChange={setPage}
      />
    </>
  );
};

export default Paging;
