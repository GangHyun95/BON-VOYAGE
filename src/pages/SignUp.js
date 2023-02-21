import React from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import instance from "../api/axios";

const SignUp = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("이메일을 입력해 주세요."),
    name: yup.string().required("이름을 입력해 주세요."),
    nickname: yup.string().required("닉네임을 입력해 주세요."),
    pw: yup
      .string()
      .min(8, "비밀번호는 8자리 이상")
      .max(16, "비밀번호는 16자리 이하")
      .required("비밀번호를 입력해주세요."),
    tel: yup
      .string()
      .min(10, "전화번호는 10자리 이상")
      .required("전화번호를 입력해주세요."),
    checkPw: yup
      .string()
      .oneOf([yup.ref("pw"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    let body = {
      miEmail: data.email,
      miPwd: data.pw,
      miPhone: data.tel,
      miNickname: data.nickname,
      miName: data.name,
    };
    console.log(body);
    try {
      await instance.put("/api/member/add", body).then((res) => {
        if (res.data.status) {
          alert(res.data.message);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }; //*

  return (
    <div className="relative m-[200px] flex items-center flex-col ">
      <h1 className="my-[50px] text-xl">Sign Up</h1>
      <form className="text-xs" onSubmit={handleSubmit(submitForm)}>
        {/* 이메일 */}
        <label htmlFor="email" className="block font-bold text-slate-600">
          이메일
          {errors.email && (
            <span className="ml-4  text-red-500">{errors.email.message}</span>
          )}
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="영문,숫자,특수문자"
            className="bg-gray-100 px-[20px] w-[450px] py-3 my-3 rounded-lg"
            {...register("email")}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 ml-4 rounded-md bg-[#4C7EFF] text-white p-2 "
          >
            중복확인
          </button>
        </div>
        <br />
        {/* 비밀번호 */}
        <label htmlFor="pw" className="block font-bold text-slate-600">
          비밀번호
          {errors.pw && (
            <span className="ml-4  text-red-500">{errors.pw.message}</span>
          )}
        </label>
        <input
          type="password"
          className="bg-gray-100 px-[20px] w-[450px] py-3 my-3 rounded-lg"
          placeholder="비밀번호(문자, 숫자, 특수문자 포함 5~16자)"
          {...register("pw")}
        />
        <br />
        {/* 비밀번호 확인 */}
        <label htmlFor="checkPw" className="block font-bold text-slate-600">
          비밀번호 확인
          {errors.checkPw && (
            <span className="ml-4  text-red-500">
              비밀번호가 일치하지 않습니다.
            </span>
          )}
        </label>
        <input
          className="bg-gray-100  text-left px-[20px] w-[450px] py-3 my-3 rounded-lg"
          type="password"
          placeholder="비밀번호 재입력"
          {...register("checkPw")}
        />
        <br />
        {/* 이름 */}
        <label htmlFor="name" className="block font-bold text-slate-600">
          이름
          {errors.name && (
            <span className="ml-4  text-red-500">{errors.name.message}</span>
          )}
        </label>
        <input
          type="text"
          placeholder="이름 입력"
          className="bg-gray-100 px-[20px]  w-[450px] py-3 my-3 rounded-lg"
          {...register("name")}
        />
        <br />
        {/* 닉네임 */}
        <label htmlFor="nickname" className="block font-bold text-slate-600">
          닉네임
          {errors.nickname && (
            <span className="ml-4  text-red-500">
              {errors.nickname.message}
            </span>
          )}
        </label>
        <input
          type="text"
          placeholder="닉네임 입력"
          className="bg-gray-100 px-[20px]  w-[450px] py-3 my-3 rounded-lg"
          {...register("nickname")}
        />
        <br />
        {/* 폰 */}
        <label htmlFor="tel" className="block font-bold text-slate-600">
          전화번호
          {errors.tel && (
            <span className="ml-4  text-red-500">{errors.tel.message}</span>
          )}
        </label>
        <input
          type="text"
          placeholder="휴대폰 번호 입력(‘-’ 제외 11자리 입력)"
          className="bg-gray-100 px-[20px]  w-[450px] py-3 my-3 rounded-lg"
          {...register("tel")}
        />
        <br />
        <div className="flex justify-center space-x-5 font-bold">
          <button
            type="submit"
            className="bg-main block rounded-lg w-[150px] my-4 text-white py-3"
          >
            회원가입
          </button>
          <button
            type="button"
            className="bg-gray-500 rounded-lg w-[150px] my-4 text-white py-3"
            onClick={(e) => navigate(-1)}
          >
            뒤로가기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
