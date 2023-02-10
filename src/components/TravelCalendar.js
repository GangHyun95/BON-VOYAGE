import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { MdOutlinePlace } from "react-icons/md";
import { RiRestaurant2Line } from "react-icons/ri";
import { MdOutlineLocalHotel } from "react-icons/md";
import { BsCalendarDay } from "react-icons/bs";
function TravelCalendar() {
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // 달력 안보였다가 보이게
  const [Visible, setVisible] = useState(false);
  const openCalendar = () => {
    setVisible(true);
  };
  const closeCalendar = () => {
    setVisible(false);
  };
  const changeDate = (e) => {
    // event를 받아서 yyyy/mm/dd 형식으로 일자를 포맷팅해줌
    // e[0]은 사용자가 여행 일자로 선택한 시작 일자가 들어감
    // e[1]은 사용자가 여행 마치는 일자로 선택한 일자가 들어감
    const startDateFormat = moment(e[0]).format("YYYY/MM/DD");
    const endDateFormat = moment(e[1]).format("YYYY/MM/DD");
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };
  return (
    <div className="w-[360px]">
      <h2 className="text-center my-8 text-6xl">부산</h2>{" "}
      <b className="opacity-75 text-center block">Busan</b>
      <div className="mx-7 my-5">
        <button onClick={openCalendar} className="border">
          <BsCalendarDay />
        </button>
        <input
          type="text"
          className="w-[120px]  p-2 text-xl border-b-2 border-green1 outline-none opacity-70 my-5 bg-transparent"
          placeholder="출발하는 날"
          value={startDate || ""}
          disabled
        />
        <span className="text-xl my-auto">~</span>
        <input
          type="text"
          className="w-[120px]  p-2 text-xl border-b-2 border-green1 outline-none opacity-70 bg-transparent"
          placeholder="돌아오는 날"
          value={endDate || ""}
          disabled
        />
      </div>
      {Visible && (
        <div className="flex relative ">
          <Calendar
            className="font-semibold"
            onChange={changeDate}
            selectRange={true}
            formatDay={(locale, date) => moment(date).format("DD")}
          />{" "}
          <button
            className="border-1 absolute right-0 top-[-25px] border-2 px-3 border-black"
            onClick={closeCalendar}
          >
            적용하기
          </button>
        </div>
      )}
      <p className="text-center my-8">선택목록</p>
      <div className="flex items-center justify-center">
        
        <div className="inline-flex" role="group">
          <button
            type="button"
            className="
            flex
        rounded-l
        px-6
        py-2
        shadow-md
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
          >
            음식점
            <RiRestaurant2Line className=" my-auto" />
          </button>
          <button
            type="button"
            className="
        px-6
        py-2
        flex
        shadow-md
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
          >
            관광명소 <MdOutlinePlace className=" my-auto" />
          </button>
          <button
            type="button"
            className="
        rounded-r
        px-6
        flex
        py-2
        shadow-md
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
          >
            숙박시설 <MdOutlineLocalHotel className=" my-auto " />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TravelCalendar;
