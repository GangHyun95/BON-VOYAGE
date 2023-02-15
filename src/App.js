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
