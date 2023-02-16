import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Header from "./components/common/Header";
import SignUp from "./pages/SignUp";
import Review from "./pages/Review";
import MySchedule from "./components/MyPage/MySchedule";

function App() {
    // 카카오 로그인 기능
 // 등록된 앱의 JavaScript key
 const jsKey = process.env.REACT_APP_KAKAO;

 // SDK는 한 번만 초기화해야 한다.
 // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
 if (!window.Kakao.isInitialized()) {
   // JavaScript key를 인자로 주고 SDK 초기화
   window.Kakao.init(jsKey);
   // SDK 초기화 여부를 확인하자.
   console.log(window.Kakao.isInitialized());
 }
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />}>
          <Route index element={<MySchedule />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
