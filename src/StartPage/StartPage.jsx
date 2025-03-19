import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { Button } from "antd";
import styled from "styled-components";
import PIC from "../components/PIC/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg";

const CustomButton = styled(Button)`

  border: none;
  padding: 10px 20px;
  border-radius: 50px;

  &:hover {
    color: #d43f27 !important;
    border-color: #e5948b !important; 
  }
`;

const StartPage = ({ onStart }) => {
  // const [isClicked, setIsClicked] = useState(false);
  // const animationFrameId = useRef(null);
  // const waveScale = useRef(0); // 儲存濾鏡強度

  // const handleClick = () => {
  //   setIsClicked(true);
  //   waveScale.current = 50; // 初始濾鏡強度
  //   animate();
  // };

  // const animate = () => {
  //   waveScale.current -= 1; // 逐漸減弱濾鏡強度
  //   if (waveScale.current >= 0) {
  //     document.querySelector("#displacementMap").setAttribute("scale", waveScale.current);
  //     animationFrameId.current = requestAnimationFrame(animate);
  //   } else {
  //     setIsClicked(false);
  //     onStart();
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     if (animationFrameId.current) {
  //       cancelAnimationFrame(animationFrameId.current);
  //     }
  //   };
  // }, []);
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
      {/* <svg style={{ position: "absolute", height: "0", width: "0" }}>
        <defs>
          <filter id="wave">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.02 0.05"
              numOctaves="3"
              result="NOISE"
            />
            <feDisplacementMap
              id="displacementMap" // 添加 id
              in="SourceGraphic"
              in2="NOISE"
              scale="0" // 初始 scale 值
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <CustomButton
        className={`start-btn`}
        onClick={handleClick}
        style={{ fontFamily: "CustomFont", filter: isClicked ? "url(#wave)" : "none" }}
      >
        <span className="start-btn-text">START</span>
      </CustomButton> */}
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
