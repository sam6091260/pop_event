import React from "react";
import "./style.css";
import { Button } from "antd";
import styled from "styled-components";
import PIC from "../components/PIC/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg";

// 创建自定义的 Button 样式
const CustomButton = styled(Button)`
  border: none;
  padding: 10px 20px;
  border-radius: 50px;

  &:hover {
    color: #d43f27 !important; /* 新的 hover 文字颜色 */
    border-color: #e5948b !important; /* 确保边框颜色与背景一致 */
  }
`;

const StartPage = ({ onStart }) => {
  return (
    <div className="start-container">
      {/* <div className="dotted-line"></div> */}

      <h1 className="start-text">GET YOUR</h1>
      <img className="start-img" src={PIC} alt="coco" />
      <p className="start-p">探索專屬您的</p>
      <p className="start-p">
        {" "}
        <span className="coco-text">COCO</span>唇膏色選
      </p>
      <CustomButton
        className="start-btn ripple"
        onClick={onStart}
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
