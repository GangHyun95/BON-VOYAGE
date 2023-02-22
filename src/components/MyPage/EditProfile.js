import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsInfoCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const EditProfile = ({ closeModal }) => {
  const schema = yup.object().shape({
    email: yup.string().email().required("이메일을 입력해주세요"),
    name: yup.string().required("이름을 입력해주세요"),
    nickname: yup.string().required("닉네임을 입력해주세요"),
    pw: yup
      .string()
      .min(8, "비밀번호는 8자리 이상이어야 합니다.")
      .max(16, "비밀번호는 16자리 이하여야 합니다.")
      .required(),
    tel: yup.string().min(10, "에러문구").required("전화번호를 입력해주세요"),
    checkPw: yup
      .string()
      .oneOf([yup.ref("pw"), null])
      .required(),
  });
  const user = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.miName,
      nickname: user.miNickname,
      email: user.miEmail,
      tel: user.miPhone,
    },
  });

  const submitForm = async (data) => {
    console.log(data);
  };
  console.log(user);
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
    <section className="w-[900px]">
      <header className="flex items-center py-5 px-10 text-xl bg-main text-white">
        <BsInfoCircleFill />
        <span className="ml-8"> 회원정보수정 </span>
      </header>
      <section className="p-12">
        {/* 프로필 사진 */}
        <div className="flex justify-center rounded-lg pb-4">
          <label htmlFor="filebutton">
            <img
              src={imgFile || "/photo/info.png"}
              alt="profile"
              className="h-32 w-32 rounded-full border"
            />
            <input
              id="filebutton"
              type="file"
              accept="image/*"
              onInput={onChangeImg}
              className="hidden"
              ref={imgRef}
            ></input>
          </label>
        </div>
        {/* form */}
        <section className="flex my-12">
          {/* 왼쪽 */}
          <ul className="flex flex-col gap-12 border-r px-24 mb-12">
            <li>이름</li>
            <li>닉네임</li>
            <li>이메일</li>
            <li>비밀번호</li>
            <li>비밀번호확인</li>
            <li>전화번호</li>
          </ul>
          {/* 오른쪽 */}
          <form
            className="flex flex-col gap-12 pl-20"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="이름 입력"
                className="w-80"
                {...register("name")}
              />

              {errors.name && (
                <span className="text-red-500 absolute left-0 -bottom-6">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="닉네임 입력"
                className="w-80"
                {...register("nickname")}
              />
              {errors.nickname && (
                <span className="text-red-500 absolute left-0 -bottom-6">
                  {errors.nickname.message}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="영문,숫자,특수문자"
                className="w-80"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 absolute left-0 -bottom-6">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-80"
                placeholder="비밀번호(문자, 숫자, 특수문자 포함 8~16자)"
                autoComplete="off"
                {...register("pw")}
              />
              {errors.pw && (
                <span className="text-red-500 absolute left-0 -bottom-6">
                  {errors.pw.message}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-80"
                placeholder="비밀번호 재입력"
                autoComplete="off"
                {...register("checkPw")}
              />
              <span className="text-red-500 absolute left-0 -bottom-6">
                {errors.checkPw && "비밀번호가 일치하지 않습니다."}
              </span>
            </div>
            <div className="relative">
              <input
                type="tel"
                className="w-80"
                placeholder="휴대폰 번호 입력(‘-’ 제외 11자리 입력)"
                {...register("tel")}
              />
              {errors.tel && (
                <span className="text-red-500 absolute left-0 -bottom-6">
                  {errors.tel.message}
                </span>
              )}
            </div>
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2">
              <button className="w-[100px] h-[50px] bg-main text-white rounded-lg py-2 mr-8 ">
                수정
              </button>
              <button
                className="w-[100px] h-[50px] bg-gray-500 text-white py-2 rounded-lg"
                type="button"
                onClick={closeModal}
              >
                닫기
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};
export default EditProfile;
