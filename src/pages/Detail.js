import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useLocation } from "react-router";
import instance from "../api/axios";
import KaKaoMap from "../components/Detail/KaKaoMap";
import TravelCalendar from "../components/Detail/TravelCalendar";
import Modal from "../Layout/Modal";

const Detail = () => {
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");

  const openNotice = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };
  const {
    state: { place },
  } = useLocation();
  const [lat] = useState(place.latitude);
  const [lng] = useState(place.longitude);
  // 데이터 넣기
  const [mapData, setMapData] = useState([]);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const fetchDate = async () => {
    try {
      const result = await instance.get(
        keyword
          ? `/api/travle/place?keyword=${keyword}`
          : `/api/travle/zone?tpzcseq=${place.seq}`
      );
      setMapData(result.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDate();
  }, [keyword]);

  return (
    <div className="flex pt-20 max-h-screen overflow-hidden">
      <TravelCalendar
        place={place}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        openNotice={openNotice}
      />
      <KaKaoMap
        lat={lat}
        lng={lng}
        mapData={mapData}
        place={place}
        startDate={startDate}
        endDate={endDate}
        openNotice={openNotice}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {visible && (
        <Modal visible={visible}>
          <div className="flex flex-col items-center justify-center p-12">
            <div className="border text-2xl p-1 bg-black text-white rounded mb-4">
              <AiOutlineCheck />
            </div>
            <p className="text-xl">선택 목록에 추가되었습니다.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Detail;
