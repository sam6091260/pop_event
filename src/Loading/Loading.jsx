import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import "./style.css";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10; // 每次增加5%
      });
    }, 100); // 每100毫秒更新一次，總共持續2秒

    return () => clearInterval(interval); // 清除定時器
  }, []);

  return (
    <div className="load-container">
      <div class="loading02">
        <span data-text="L">L</span>
        <span data-text="O">O</span>
        <span data-text="A">A</span>
        <span data-text="D">D</span>
        <span data-text="I">I</span>
        <span data-text="N">N</span>
        <span data-text="G">G</span>
      </div>

      <Progress
        percent={progress}
        status="active"
        showInfo={false}
        strokeWidth={2}
        strokeColor={{
          "0%": "#f891a6",
          "100%": "#DF3021",
        }}
      />
    </div>
  );
};

export default Loading;
