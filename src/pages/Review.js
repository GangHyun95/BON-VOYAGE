import React, { useRef, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import MyPageLayOut from "../Layout/MyPageLayOut";
// 02. form 요소의 항목별 에러 체크 정의
const Review = () => {
  // 이미지 미리보기 기능
  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();
    // 미리보기 기능
    // files는 배열에 담긴다.
    const uploadFile = e.target.files;
    // 이미지 여러개 업로드 기능
    let imageUrlLists = [...imgFile];
    for (let i = 0; i < uploadFile.length; i++) {
      const currentImageUrl = URL.createObjectURL(uploadFile[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    setImgFile(imageUrlLists);
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
  };
  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setImgFile(imgFile.filter((_, index) => index !== id));
  };
  // input 리뷰 텍스트
  // 사용자 입력 저장
  const [checkItemContent, setCheckItemContent] = useState("");
  // 줄바꿈 위치를 저장하는 Dictionary
  const [lineBreakIndexDict, setLineBreakIndexDict] = useState({});
  // 줄 수 (높이)
  const [lineHeight, setLineHeight] = useState(0);
  // 사용자 입력 업데이트 및 줄바꿈 감지
  const checkItemChangeHandler = (event) => {
    setCheckItemContent(event.target.value);
    // Scroll이 생기면 line break
    if (event.target.scrollHeight !== event.target.clientHeight) {
      setLineHeight((prev) => prev + 1); // textarea 높이 늘리고
      setLineBreakIndexDict({
        ...lineBreakIndexDict,
        [event.target.value.length - 1]: 1,
      }); // 줄바꿈 위치 저장
    } else {
      // 다시 줄바꿈 지점으로 오면 line break 취소
      if (lineBreakIndexDict[event.target.value.length]) {
        setLineHeight((prev) => prev - 1); // textarea 높이 줄이고
        setLineBreakIndexDict({
          ...lineBreakIndexDict,
          [event.target.value.length]: 0,
        }); // Dictionary에서 삭제
      }
    }
  };
  // 너비 초과로 인한 줄바꿈 말고 사용자가 엔터를 입력했을 때의 줄바꿈 처리
  const checkItemEnterHandler = (event) => {
    if (event.key === "Enter") {
      // textarea 높이는 checkItemChangeHandler에서 변경됨
      setLineBreakIndexDict({
        ...lineBreakIndexDict,
        [event.target.value.length]: 1,
      }); // 줄바꿈 위치 저장
    }
  };
  // 리뷰 내용 저장하기
  const [reviews, setReviews] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    setReviews([...reviews, checkItemContent]);

    setCheckItemContent("");
  };
  return (
    <MyPageLayOut title="리뷰게시판">
      <div className="relative ">
        {/* 리뷰 카드 */}
        <div className="flex justify-around  mb-[100px]">
          <div className="overflow-hidden border-2  border-gray-200  rounded-lg w-[180px] h-[300px]">
            <img
              src="/photo/travellog1.jpg"
              alt="임시"
              className="transition-transform h-[180px] duration-200 ease-in-out"
            />
            <p className="text-[8px]  p-2 font-Mont border-b-2 border-gray-200 ">
              너무너무 즐거운 여행이였습니다. 너무 예뻤어요 추천합니다!!!!
              다음에 또 가고싶어요
            </p>
            <div className="text-start py-2 px-2">
              <p className="text-[8px] text-main font-Mont ">★★★★★</p>
              <p className="text-[7px] font-Mont">
                허산현<span className="text-[4px] px-1 ">2023.01.24</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2  border-gray-200  rounded-lg w-[180px] h-[300px]">
            <img
              src="/photo/travellog2.jpg"
              alt="임시"
              className="h-[180px] transition-transform duration-200 ease-in-out"
            />
            <p className="text-[8px] p-2 font-Mont border-b-2 border-gray-200 ">
              너무너무 즐거운 여행이였습니다. 너무 예뻤어요 추천합니다!!!!
              다음에 또 가고싶어요
            </p>
            <div className="text-start py-2 px-2">
              <p className="text-[8px] text-main font-Mont ">★★★★★</p>
              <p className="text-[7px] font-Mont">
                허산현<span className="text-[4px] px-1 ">2023.01.24</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2  border-gray-200  rounded-lg w-[180px] h-[300px]">
            <img
              src="/photo/travellog3.jpg"
              alt="임시"
              className=" h-[180px] transition-transform duration-200 ease-in-out"
            />
            <p className="text-[8px] p-2 font-Mont border-b-2  border-gray-200 ">
              너무너무 즐거운 여행이였습니다. 너무 예뻤어요 추천합니다!!!!
              다음에 또 가고싶어요
            </p>
            <div className="text-start py-2 px-2">
              <p className="text-[8px] text-main font-Mont ">★★★★★</p>
              <p className="text-[7px] font-Mont">
                허산현<span className="text-[4px] px-1 ">2023.01.24</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2  border-gray-200  rounded-lg w-[180px] h-[300px]">
            <img
              src="/photo/travellog4.jpg"
              alt="임시"
              className=" transition-transform duration-200 h-[180px] ease-in-out"
            />
            <p className="text-[8px] p-2 font-Mont border-b-2 border-gray-200 ">
              너무너무 즐거운 여행이였습니다. 너무 예뻤어요 추천합니다!!!!
              다음에 또 가고싶어요
            </p>
            <div className="text-start py-2 px-2">
              <p className="text-[8px] text-main font-Mont ">★★★★★</p>
              <p className="text-[7px] font-Mont">
                허산현<span className="text-[4px] px-1 ">2023.01.24</span>
              </p>
            </div>
          </div>
        </div>
        <textarea
          value={checkItemContent}
          onChange={checkItemChangeHandler}
          onKeyDown={checkItemEnterHandler}
          type="text"
          className="w-full text-lg leading-6  border-blue-200 border-4 px-11 py-11"
          placeholder="리뷰를 적여주세요."
        ></textarea>
        <div className="flex w-full max-h-[240px] my-[-25px] rounded-lg">
          <label
            className="border-2  text-center h-[70px] bottom-[-20px] bg-main text-white left-0 p-[10px] relative  rounded-sm"
            forhtml="filebutton"
          >
            <BsFillCameraFill className="inline-block mx-1" />
            <span className=""> +사진 추가</span>
            <input
              id="filebutton"
              multiple="true"
              type="file"
              accept="image/*"
              onInput={onChangeImg}
              className="hidden"
              ref={imgRef}
            ></input>
          </label>{" "}
        </div>
        <div className="flex justify-end">
          {" "}
          <select
            className="form-select form-select-sm
    inline-block
    w-[400px]
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    absolute
    left-[150px]
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-sm example"
          >
            <option selected>★★★★★ 아주 좋아요 </option>
            <option value="1">★★★★ 좋아요</option>
            <option value="2">★★★ 보통이에요</option>
            <option value="3">★★ 별로에요</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-main flex px-6 py-1 text-sm rounded-sm text-white"
          >
            <BiCheckCircle className="my-1" />
            리뷰 등록하기
          </button>
        </div>
        <div className="flex max-w-[100%]">
          {imgFile.map((image, id) => (
            <div key={id} className="max-h-[240px] relative flex max-w-[240px]">
              <button
                className="absolute right-[-40px] bg-black rounded-xl text-white px-2 top-12"
                onClick={() => handleDeleteImage(id)}
              >
                X
              </button>
              <img
                className="max-w-[240px] m-11 max-h-[240px]"
                src={image}
                alt={`${image}-${id}`}
              ></img>
            </div>
          ))}{" "}
        </div>
        {/* 리뷰 생성  */}
        <div>
          {" "}
          <ul>
            {reviews.map((review, index) => (
              <div className="">
                <li className="w-full p-20 mt-3 bg-gray-200" key={index}>
                  <div className="flex justify-start" key={index}>
                    <p>닉네임 | 허산현</p>
                    <p>
                      리뷰평점 |<span className="text-main">★★★★★</span>
                    </p>
                    <p>날짜 | 2023.01.01</p>
                  </div>
                  <div>{review} </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </MyPageLayOut>
  );
};
export default Review;
