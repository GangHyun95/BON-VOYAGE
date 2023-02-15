import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className=" text-center  bg-gray-50 text-gray-800">
                    <div className=" p-9 ">
                        <div className="flex justify-center cursor-pointer gap-3 mb-5">
                            <img className="w-[25px]" src="/photo/insta.png" />
                            <img className="w-[25px]" src="/photo/facebook.png" />
                            <img className="w-[25px]" src="/photo/youtube.png" />
                            <img className="w-[25px]" src="/photo/blog.png" />
                        </div>
                        <div className="flex justify-center cursor-pointer mb-5">
                            <img className="  w-[120px] h-[33px]" src="/photo/applestore.png" />
                            <img className="  w-[120px] h-[33px]" src="/photo/playstore.png" />
                        </div>
                        <div className=" text-center text-xs leading-normal  ">
                            <div className="mb-1 ">이용약관 | 개인정보처리방침</div>
                            <br />
                            주식회사 프로젝트명
                            <br />
                            사업자등록번호 123-12-12345
                            <br />
                            대구시 중구 남일동 741-11 5F
                            <br />
                            contact@project.co.kr
                            <div className=" mt-5">ⓒ PROJECT Co.,Ltd All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
