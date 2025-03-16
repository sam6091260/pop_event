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
      <Progress
        percent={progress}
        status="active"
        showInfo={false}
        strokeWidth={2}
        strokeColor={{
          "0%": "#f891a6",
          "100%": "#9b2857",
        }}
      />
    </div>
  );
};

export default Loading;
