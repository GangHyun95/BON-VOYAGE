import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../../Calendar.css";
import { BiCalendarHeart } from "react-icons/bi";
import { useEffect } from "react";
import instance from "../../api/axios";
import { useSelector } from "react-redux";
import SelectionCard from "./SelectionCard";

function TravelCalendar({
  place,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  openNotice,
}) {
  const user = useSelector((state) => state.user);
  const [schedule, setSchedule] = useState([]);
  // 달력 안보였다가 보이게
  const [visible, setVisible] = useState(false);
  const openCalendar = () => {
    setVisible(!visible);
  };
  const changeDate = (e) => {
    // event를 받아서 yyyy/mm/dd 형식으로 일자를 포맷팅해줌
    // e[0]은 사용자가 여행 일자로 선택한 시작 일자가 들어감
    // e[1]은 사용자가 여행 마치는 일자로 선택한 일자가 들어감
    const startDateFormat = moment(e[0]).format("YYYY-MM-DD");
    const endDateFormat = moment(e[1]).format("YYYY-MM-DD");
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  // const [selectDate, setSelectDate] = useState();
  const [betweenDate, setBetweenDate] = useState([]);

  useEffect(() => {
    setBetweenDate(getDatesStartToLast(startDate, endDate));
  }, [startDate, endDate]);

  const getSchedule = async () => {
    await instance
      .get("/api/schedule/member/list", { params: { miseq: user.miSeq } })
      .then((res) => setSchedule(res.data));
  };

  const filtered = getfilteredList(schedule, place);

  const [alarm, setAlarm] = useState(false);
  useEffect(() => {
    getSchedule();
  }, [openNotice, user, alarm]);

  return (
    <div className="w-[360px] overflow-x-hidden overflow-y-auto">
      <h2 className="text-center my-8 mt-12 text-4xl font-bold">
        {place.name}
      </h2>
      <p className="text-center mt-4 text-stone-400 text-lg font-Mont">
        {place.engname}
      </p>
      {betweenDate?.length && (
        <p className="text-center mt-4 font-bold text-2xl">
          {betweenDate.length}DAY
        </p>
      )}
      <div className="flex justify-center items-center">
        <button onClick={openCalendar} className="p-2">
          <BiCalendarHeart />
        </button>
        <input
          type="text"
          className="w-[120px] p-2 text-xl border-green1 border-b-4 bg-transparent outline-none opacity-70 my-5 rounded-xl"
          placeholder="출발하는 날"
          value={startDate || ""}
          disabled
        />
        <span className="text-xl my-auto px-2">~</span>
        <input
          type="text"
          className="w-[120px]  p-2 text-xl border-green1 outline-none bg-transparent opacity-70 border-b-4 rounded-xl"
          placeholder="돌아오는 날"
          value={endDate || ""}
          disabled
        />
      </div>
      {visible && (
        <div className="px-11 absolute z-20">
          <Calendar
            calendarType="US"
            className="font-semibold relative"
            onChange={changeDate}
            selectRange={true}
            formatDay={(locale, date) => moment(date).format("D")}
          ></Calendar>
        </div>
      )}
      <p className="text-center my-8">선택목록</p>
      {filtered.map((list) => (
        <SelectionCard
          list={list}
          place={place}
          key={list.tsSeq}
          alarm={alarm}
          setAlarm={setAlarm}
        />
      ))}
    </div>
  );
}
function getDatesStartToLast(startDate, lastDate) {
  let regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!(regex.test(startDate) && regex.test(lastDate))) return;
  let result = [];
  let curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
    result.push(curDate.toISOString().split("T")[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
}

const getfilteredList = (schedule, place) =>
  schedule.filter((list) => list.tsName === place.name);

export default TravelCalendar;
