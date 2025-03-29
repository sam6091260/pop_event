import React, { useState } from "react";
import "./style.css";
import { Button } from "antd";
import styled, { keyframes, css } from "styled-components";
import PIC from "../components/PIC/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg";

// 定義動畫
const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% -10%, 0% -10%, 10% -10%, 20% -10%, 30% -10%, 22% -10%,
      50% -10%, 65% -10%, 90% -10%;
    opacity: 0;
  }
`;

const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% -10%, 55% -10%, 70% -10%, 85% -10%;
  }
  50% {
    background-position: 0% 10%, 20% 30%, 40% 30%, 60% 50%, 80% 60%;
  }
  100% {
    background-position: 0% 120%, 20% 120%, 40% 120%, 60% 120%, 80% 120%;
    opacity: 0;
  }
`;

// 定義 pulse 動畫
const pulseAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
`;

const CustomButton = styled(Button)`
  position: relative;
  display: block;
  text-align: center;
  letter-spacing: -1.5px;
  border: none;
  color: #d43f27 !important;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  animation: ${pulseAnimation} 1.5s infinite;

  &:hover {
    animation: none;
    color: #d43f27 !important;
    border-color: #e5948b !important;
  }

  ${({ animate }) =>
    animate &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 200%;
        height: 100%;
        left: -10%;
        z-index: -1;
        transition: all ease-in-out 1.5s;
        background-repeat: no-repeat;
      }
      &::before {
        display: block;
        top: -85%;
        background-image: radial-gradient(circle, #fff 20%, transparent 20%),
          radial-gradient(circle, transparent 20%, #fff 20%, transparent 30%),
          radial-gradient(circle, #fff 25%, transparent 25%),
          radial-gradient(circle, #fff 25%, transparent 25%),
          radial-gradient(circle, #fff 20%, transparent 20%);
        background-size: 10% 10%, 20% 20%, 25% 25%;
        animation: ${topBubbles} ease-in-out 0.75s forwards;
      }

      &::after {
        display: block;
        bottom: -85%;
        background-image: radial-gradient(circle, #fff 20%, transparent 20%),
          radial-gradient(circle, #fff 20%, transparent 20%),
          radial-gradient(circle, transparent 10%, #fff 15%, transparent 20%);
        background-size: 25% 25%, 20% 20%, 18% 18%;
        animation: ${bottomBubbles} ease-in-out 0.75s forwards;
      }
    `}
`;

const StartPage = ({ onStart }) => {
  // 控制動畫顯示的狀態
  const [animate, setAnimate] = useState(false);

  // 點擊後觸發動畫
  const handleClick = () => {
    setAnimate(true); // 設定 animate 狀態為 true，觸發動畫
    setTimeout(() => {
      setAnimate(false); // 動畫完成後，可以重設狀態
    }, 1500); // 根據動畫持續時間調整，這裡假設動畫持續 1.5 秒
  };

  return (
    <div className="start-container">
      <h1 className="start-text">GET YOUR</h1>
      {/* <img className="start-img" src={PIC} alt="coco" /> */}
      <div className="start-title">ROUGE</div>
      <div className="start-title" style={{ marginBottom: "20px" }}>
        COCO
      </div>
      <p className="start-p">探索專屬您的</p>
      <p className="start-p">
        <span className="coco-text">COCO</span>系列唇彩色選
      </p>
      <CustomButton
        className="start-btn"
        onClick={() => {
          handleClick(); // 觸發點擊事件
          onStart();
        }}
        animate={animate} // 根據狀態設置 animate 屬性
        style={{ fontFamily: "CustomFont" }}
      >
        <span className="start-btn-text">START</span>
      </CustomButton>
      {/* SVG 虛線 */}
      <div className="dotted-line">
        <svg width="310" height="1000">
          <path
            d="
          M 10 0 
          V 500 
          A 10 10 0 0 0 300 500 
          V 0
        " // U 型路徑
            stroke="white"
            strokeWidth="3"
            strokeDasharray="10, 10" // 10px 實線, 15px 間隔
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default StartPage;
