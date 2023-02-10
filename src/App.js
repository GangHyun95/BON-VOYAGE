import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
