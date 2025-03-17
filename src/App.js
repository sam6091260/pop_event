import React, { useState } from "react";
import StartPage from "./StartPage/StartPage";
import TestPage from "./TestPage/TestPage"; // 假設測驗的主要頁面
import MyHelmet from "./Helmet";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(false); // 預設為 false，不進入 loading
  const [showTest, setShowTest] = useState(false); // 控制是否顯示測驗畫面
  const [fadeOut, setFadeOut] = useState(false); // 控制 StartPage 淡出效果

  // 點擊 StartPage 的按鈕後執行
  const handleStart = () => {
    setFadeOut(true); // 開始淡出 StartPage
    setTimeout(() => {
      setLoading(false); // Loading 完成
      setShowTest(true); // 顯示測驗頁面
    }, 1000); // 模擬 1 秒加載時間
  };

  return (
    <div>
      <MyHelmet />
      {/* StartPage 淡出 */}
      <div className={`page ${fadeOut ? "fade-out" : ""}`}>
        {!loading && !showTest && <StartPage onStart={handleStart} />}
      </div>

      {/* TestPage 淡入 */}
      <div className={`page ${showTest ? "fade-in" : ""}`}>
        {!loading && showTest && <TestPage />}
      </div>
    </div>
  );
};

export default App;
