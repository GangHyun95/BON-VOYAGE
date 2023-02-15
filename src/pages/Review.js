import React, { useState } from "react";
const Review = () => {
  const [visible, setVisible] = useState(false);
  const openReview = () => {
    setVisible(!visible);
  };
  const closeReview = () => {
    setVisible(false);
  };
  return (
    <div>
      <div>
        <img src="/photo/travellog2.jpg" alt="리뷰이미지"></img>{" "}
        <label>리뷰쓰기</label>
        <input type="text" className="w-[200px] h-[200px] my-[100px]" />
      </div>
    </div>
  );
};
export default Review;
