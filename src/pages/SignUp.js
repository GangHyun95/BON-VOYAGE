
import React , {useState}from "react";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handlePasswordVerifyChange = (event) => {
      setPasswordVerify(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== passwordVerify) {
        alert('Passwords do not match');
        return;
      }
      alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    };
      const [isChecked, setIsChecked] = useState(false);
      const [isChecked2, setIsChecked2] = useState(false);
      const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };
  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };
    return <div className="relative m-[200px] flex items-center flex-col ">
    <h1 className=" my-[50px] text-xl">Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <label className="block text-xs">
        이메일  </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
      
        />
    
      <br />
      <label className="block text-xs">
        이름</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
        />
      
      <br />
      <label className="block text-xs">
        비밀번호 </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="bg-gray-100 text-xs px-[20px] w-[450px] py-3 my-3 rounded-lg"
        placeholder="비밀번호(문자, 숫자, 특수문자 포함 10~20자)"
        />
     
      <br />
      <label className="block text-xs"> 
        비밀번호 확인 </label>
        <input
        className="bg-gray-100 text-xs text-left px-[20px] w-[450px] py-3 my-3 rounded-lg"
          type="password"
          value={passwordVerify}
          onChange={handlePasswordVerifyChange}
          placeholder="비밀번호 재입력"
        />
    
      <br />
      <div>
      <label className="text-xs text-gray-600">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          
        />
       본인은 만 14세 이상입니다. (필수)
      </label>
    </div>
    <div>
      <label className="text-xs text-gray-600">
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
       개인정보수집에 동의합니다. (필수) 
      </label>
    </div>
    <div>
      <label className="text-xs text-gray-600">
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={handleCheckboxChange3}
        />
      이용약관에 동의합니다. (필수)
      </label>
    </div>
      <button type="submit" className="bg-main block rounded-lg px-[195px] my-4 text-white py-3">회원가입</button>
      <button type="submit" className="bg-gray-500 rounded-lg px-[195px] my-4 text-white py-3">뒤로가기</button>
    </form>
  </div>;
};

export default SignUp;
