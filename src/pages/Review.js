import axios from "axios";
import React, { useRef, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// 02. form 요소의 항목별 에러 체크 정의
const schema = yup.object({
  title: yup.string().trim().required("제목을 입력해주세요."),
  content: yup.string().trim().required("내용을 입력해주세요."),
  timestamp: yup.string().required("날짜를 선택해 주세요"),
});
const Review = () => {
  const [visible, setVisible] = useState(false);
  const openReview = () => {
    setVisible(!visible);
  };
  const closeReview = () => {
    setVisible(false);
  };
  // 이미지 미리보기 기능
  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();

    // 미리보기 기능
    if (e.target.files) {
      // files는 배열에 담긴다.
      // file 이 1개 이므로 e.taret.files[0]
      const uploadFile = e.target.files[0];
      console.log(uploadFile);

      // 이미지를 읽어들이는 바닐라 함수
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        // 임시 이미지주소가 만들어진다.
        // useState 입니다.
        setImgFile(reader.result);
      };

      // 서버로 이미지를 임시로 보내고 URL 글자를 받아오는 코드
      // 일반적 방법

      // const formData = new FormData();
      // formData.append("files", uploadFile);
      // await axios({
      //   method: "post",
      //   url: "/api/files/images",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
  };

  return (
    <div>
      <div className="">
        <button
          className="border-2 m-[200px] block rounded-lg p-2"
          onClick={openReview}
        >
          리뷰쓰기
        </button>
        {visible && (
          <div className="flex border-blue-200 border-4 w-[1000px] rounded-lg">
             <img
              className="max-w-[200px] m-11 max-h-[200px]"
              src={imgFile}
              alt="리뷰이미지"
            ></img>{" "}
            <label
              className="border-2 h-[40px] text-center absolute bottom-[300px] left-0 p-1  bg-blue-200 rounded-lg"
              forhtml="filebutton"
            >
            <BsFillCameraFill className="inline-block mx-1"/><span className=""> +사진 추가</span>
             
              <input
                id="filebutton"
                multiple="multiple"
                type="file"
                accept="image/*"
                onInput={onChangeImg}
                className="hidden"
                ref={imgRef}
              ></input>
            </label>
            <input
              type="text"
              className="w-[600px] h-[300px] px-11 py-11 "
              placeholder="리뷰를 적여주세요."
            ></input>
          </div>
        )}
      </div>
    </div>
  );
};
export default Review;
