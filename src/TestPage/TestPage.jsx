import React, { useState, useEffect } from "react";
import { Button, Space, ConfigProvider } from "antd";
import "./App.css";
import Progress from "../Loading/Progress";
import PIC from "../components/PIC/RCC_2025_CMYK_ISOcoatedV2_T300_R300.svg";
import OTF from "../components/PIC/124.png";
import OTZ from "../components/PIC/130.png";
import OZS from "../components/PIC/106.png";
import OOT from "../components/PIC/112.png";
import OOF from "../components/PIC/114.png";
import OSZ from "../components/PIC/120.png";
import OTE from "../components/PIC/128.png";
import OTS from "../components/PIC/126.png";
import OTFBG from "../components/PIC/124_BG.jpg";
import OTZBG from "../components/PIC/130_BG.jpg";
import OZSBG from "../components/PIC/106_BG.jpg";
import OOTBG from "../components/PIC/112_BG.jpg";
import OOFBG from "../components/PIC/114_BG.jpg";
import OSZBG from "../components/PIC/120_BG.jpg";
import OTEBG from "../components/PIC/128_BG.jpg";
import OTSBG from "../components/PIC/126_BG.jpg";
import bg from "../components/PIC/問答底圖-1.0.jpg";
import Loading from "../Loading/Loading";

// 所有答案的可能性跟對應顏色名稱
// const answers = [
//   {
//     combination: "AA",
//     third: "A",
//     fourth: "A",
//     color: "F2DADE",
//     colorsName: "Soft Yet rich",
//   },
//   {
//     combination: "AB",
//     third: "A",
//     fourth: "B",
//     color: "F2DADE",
//     colorsName: "Soft Yet rich",
//   },
//   {
//     combination: "AC",
//     third: "A",
//     fourth: "C",
//     color: "F2DADE",
//     colorsName: "Soft Yet rich",
//   },
//   {
//     combination: "AD",
//     third: "A",
//     fourth: "D",
//     color: "F2DADE",
//     colorsName: "Soft Yet rich",
//   },
//   {
//     combination: "BA",
//     third: "B",
//     fourth: "A",
//     color: "D05362",
//     colorsName: "Tender yet vibrant",
//   },
//   {
//     combination: "BB",
//     third: "B",
//     fourth: "B",
//     color: "D05362",
//     colorsName: "Tender yet vibrant",
//   },
//   {
//     combination: "BC",
//     third: "B",
//     fourth: "C",
//     color: "D05362",
//     colorsName: "Tender yet vibrant",
//   },
//   {
//     combination: "BD",
//     third: "B",
//     fourth: "D",
//     color: "D05362",
//     colorsName: "Tender yet vibrant",
//   },
//   {
//     combination: "CA",
//     third: "C",
//     fourth: "A",
//     color: "9B6063",
//     colorsName: "Delicate",
//   },
//   {
//     combination: "CB",
//     third: "C",
//     fourth: "B",
//     color: "9B6063",
//     colorsName: "Delicate",
//   },
//   {
//     combination: "CC",
//     third: "C",
//     fourth: "C",
//     color: "9B6063",
//     colorsName: "Delicate",
//   },
//   {
//     combination: "CD",
//     third: "C",
//     fourth: "D",
//     color: "9B6063",
//     colorsName: "Delicate",
//   },
//   {
//     combination: "DA",
//     third: "D",
//     fourth: "A",
//     color: "E5948B",
//     colorsName: "Subite",
//   },
//   {
//     combination: "DB",
//     third: "D",
//     fourth: "B",
//     color: "E5948B",
//     colorsName: "Subite",
//   },
//   {
//     combination: "DC",
//     third: "D",
//     fourth: "C",
//     color: "E5948B",
//     colorsName: "Subite",
//   },
//   {
//     combination: "DD",
//     third: "D",
//     fourth: "D",
//     color: "E5948B",
//     colorsName: "Subite",
//   },
// ];

// 選擇題對應顏色
// const colors = {
//   A: "f891a6",
//   B: "ed9d8a",
//   C: "d22d35",
//   D: "9b2857",
// };

const answers = [
  {
    combination: "A",
    fourth: "A",
    color: "f891a6",
    colorsName: "溫柔浪漫",
    text: "你總是散發平易近人的親切感，為周圍的人帶來輕鬆愉悅的氛圍。",
    highlight: "自然溫柔裸粉色調",
    endText: "的唇膏，襯托你與生俱來的親和力。",
    imgL: OTF,
    imgR: OTZ,
    bgL: OTFBG,
    bgR: OTZBG,
    lipColorL: "124",
    lipENameL: "MARIE",
    lipCNameL: "瑪麗",
    lipColorR: "130",
    lipENameR: "LA PAUSA",
    lipCNameR: "法式別墅",
  },
  {
    combination: "B",
    fourth: "B",
    color: "ed9d8a",
    colorsName: "自信沈穩",
    text: "你擁有積極冒險的精神，總是勇於嘗試新事物，探索未知的世界。",
    highlight: "自信沉穩裸棕色調",
    endText: "的唇膏，展現你自信而從容不迫的氣場。",
    imgL: OZS,
    imgR: OOT,
    bgL: OZSBG,
    bgR: OOTBG,
    lipColorL: "106",
    lipENameL: "DEAUVILLE",
    lipCNameL: "杜維埃",
    lipColorR: "112",
    lipENameR: "PARIS IER",
    lipCNameR: "巴黎第一區",
  },
  {
    combination: "C",
    fourth: "C",
    color: "d22d35",
    colorsName: "熱情明亮",
    text: "你不掩飾表達自己的情感與想法，總是以最真誠的方式呈現自我。",
    highlight: "熱情明亮暖紅色調",
    endText: "的唇膏，展現出你直率敢言的個性。",
    imgL: OOF,
    imgR: OSZ,
    bgL: OOFBG,
    bgR: OSZBG,
    lipColorL: "114",
    lipENameL: "LOS ANGELES",
    lipCNameL: "洛杉磯",
    lipColorR: "120",
    lipENameR: "GABRIELLE",
    lipCNameR: "嘉柏麗",
  },
  {
    combination: "D",
    fourth: "D",
    color: "9b2857",
    colorsName: "神秘優雅",
    text: "你喜愛低調的生活方式，需要時間才能認識你內心豐富的情感。",
    highlight: "神秘優雅莓果色調",
    endText: "的唇膏，完美詮釋你高雅內斂的性格。",
    imgL: OTE,
    imgR: OTS,
    bgL: OTEBG,
    bgR: OTSBG,
    lipColorL: "128",
    lipENameL: "LÉGENDE",
    lipCNameL: "傳奇",
    lipColorR: "126",
    lipENameR: "VENISE",
    lipCNameR: "威尼斯",
  },
];

const quastions = [
  {
    index: 1,
    question: "你希望初次見面的人怎麼形容你的個性?",
    options: [
      { A: "讓人感覺溫暖好親近\n像個擅長聆聽得朋友" },
      { B: "讓人感覺自信有想法\n對許多事物充滿好奇" },
      { C: "喜愛分享自己理念想法\n也樂於接納他人的\n獨特之處" },
      { D: "想保持一點低調\n讓人對你充滿好奇" },
    ],
  },
  {
    index: 2,
    question: "您在日常生活中喜愛的妝容風格是?",
    options: [
      { A: "自然柔和\n綻放粉嫩好氣色" },
      { B: "知性時髦\n散發個人魅力" },
      { C: "明亮耀眼\n展現十足氣場" },
      { D: "低調優雅\n展現獨樹一格的品味" },
    ],
  },
  {
    index: 3,
    question: "您會選擇什麼穿搭風格出席好友的派對活動?",
    options: [
      { A: "偏好簡約的風格\n喜歡自然舒適的感覺" },
      { B: "喜歡乾淨俐落的搭配\n成熟穩重的風格" },
      { C: "喜歡別具一格\n時尚亮眼的風格\n能夠展現個人特色" },
      { D: "高雅氣質的設計\n整體帶有低調的奢華感" },
    ],
  },
  {
    index: 4,
    question: "你期待到什麼樣的地方展開一場自由冒險之旅?",
    options: [
      { A: "如童夢般舒適寧靜的小鎮\n讓心靈得到完全\n放鬆和療癒" },
      { B: "置身壯麗的自然奇景之中\n樂在探索充滿驚奇的景觀" },
      { C: "陽光明媚充滿人潮的海灘\n盡情釋放所有的生活壓力" },
      { D: "悠久歷史的古老城市\n每個角落都隱藏著\n未知的故事" },
    ],
  },
];

const App = () => {
  // 狀態管理
  const [combinations, set_combinations] = useState([]); // 保存排列組合結果
  const [step, set_step] = useState(1); // 當前第幾次測驗
  const [totalSteps, set_totalSteps] = useState(4); // 總題目數
  const [colorChosen, set_colorChosen] = useState(false); // 顏色是否被選擇
  const [select, set_select] = useState(null); // 當前答案
  const [selections, set_selections] = useState([]); // 使用者的選擇紀錄
  const [result, set_result] = useState(null); // 最終結果Hex
  const [colorName, set_colorName] = useState(null); // 最終結果Hex Name
  const [fadeIn, setFadeIn] = useState(false); // 控制淡入
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 控制 Loading 顯示
  // 取得當前問題
  const currentQuestion = quastions[step - 1];

  // 第一次渲染頁面塞入答案配對
  useEffect(() => {
    set_combinations(answers);
    setFadeIn(true); // 開始淡入
  }, []);

  // 判斷背景顯示
  useEffect(() => {
    if (result?.color) {
      document.body.style.background = `#${result.color}`;
    } else {
      // 設置背景圖片自適應
      document.body.style.background = `url(${bg}) no-repeat center center / cover`;
      document.body.style.backgroundSize = "cover"; // 保證背景圖片覆蓋整個視窗
      document.body.style.backgroundAttachment = "fixed"; // 保證背景圖片固定不會隨滾動而滾動
    }

    // 清理背景
    return () => {
      document.body.style.background = `url(${bg}) no-repeat center center / cover`;
    };
  }, [result?.color]);

  const handleSelect = (option) => {
    // 存放當前選擇的答案
    set_select(option); // 塞入選擇的答案
    set_colorChosen(true); // 設置顏色已選擇(啟動下一步)
  };

  // 下一步邏輯
  const handleNextStep = () => {
    const newSelections = [...selections, select]; // 變數為選擇的紀錄與新加入選擇
    set_selections(newSelections); // 塞入更新選擇變數
    set_select(null); // 清除當前答案選擇（避免重複覆蓋）

    // 若選擇的顏色累積等於總題目數
    if (newSelections.length === totalSteps) {
      setIsLoading(true); // 顯示 Loading 畫面

      setTimeout(() => {
        const thirdAndFourthKey = newSelections.slice(3).join("");
        const matchAnswer = answers.find(
          (answer) => answer.combination === thirdAndFourthKey
        );

        set_result(matchAnswer || "Unique Combination!");
        set_colorName(
          matchAnswer?.color || `無對應的顏色名稱 (Key: ${thirdAndFourthKey})`
        );
        setIsLoading(false); // 隱藏 Loading，顯示結果
      }, 2000); // 模擬 2 秒的加載時間
      // const thirdAndFourthKey = newSelections.slice(3).join(""); // 取出第三和第四答案

      // // 根據第三與四答案比對出對應的答案結果
      // const matchAnswer = answers.find(
      //   (answer) => answer.combination === thirdAndFourthKey
      // );
      // // 塞入比對出來的結果
      // set_result(matchAnswer || "Unique Combination!");
      // // 塞入顏色名稱
      // set_colorName(
      //   matchAnswer?.color || `無對應的顏色名稱 (Key: ${thirdAndFourthKey})`
      // );
    } else {
      // 繼續下一題
      set_step((prev) => prev + 1);
      // 重置顏色選擇狀態
      set_colorChosen(false);
    }
  };

  // 上一題邏輯
  const handlePreviousStep = () => {
    if (step > 1) {
      const newSelections = selections.slice(0, -1); // 移除最後一個選擇的答案
      set_selections(newSelections); // 更新選擇紀錄
      set_select(null); // 清空當前選擇
      set_colorChosen(false); // 取消顏色選擇
      set_step((prevStep) => prevStep - 1); // 回到上一題
    }
  };

  // 重置測驗
  const resetTest = () => {
    set_step(1);
    set_selections([]);
    set_result(null);
    set_colorName(null);
    set_colorChosen(false);
  };

  // console.log("當前選擇select", select);
  // console.log("result", result);
  // console.log("已選擇selections", selections);

  return (
    <div className={`test-page ${fadeIn ? "fade-in" : ""}`}>
      {isLoading ? (
        <Loading /> // 只顯示 Loading 畫面
      ) : (
        <div
          className="main-container"
          style={
            result
              ? {
                  backgroundColor: "rgba(255,255,255,1)",
                }
              : {
                  backgroundColor: "rgba(255,255,255,0.8)",
                }
          }
        >
          <div
            style={
              result
                ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1.5px solid #${result.color}`,
                    borderRadius: "36px",
                    width: "100%",
                    minHeight: "100vh",
                  }
                : null
            }
          >
            <div className="main-layout">
              {result ? (
                <img src={PIC} alt="coco" className="coco-img" />
              ) : (
                <div className="main-title">
                  <p className="titles" style={{ fontSize: "18px" }}>
                    GET YOUR
                  </p>
                  <img src={PIC} alt="coco" className="coco-img-main" />
                  {/* <p className="titles">ROUGE COCO</p> */}
                </div>
              )}
              <div className="progress">
                {!result ? (
                  <Progress step={step} totalSteps={totalSteps} />
                ) : // <Progress step={step} totalSteps={totalSteps} />
                null}
              </div>

              {result ? (
                <div className="final-layout">
                  <h1 className="final-h1">
                    你的專屬
                    <span className="lipText">COCO</span>
                    唇膏色選
                  </h1>
                  <div className="final-card-area">
                    <div className="final-card">
                      <div className="card-up">
                        <img
                          src={result.bgL}
                          alt={result.colorsName}
                          className="card-img"
                        />

                        <div className="card-title">
                          <p
                            className="lipText"
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipColorL}
                          </p>
                          <p
                            className="lipText"
                            style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipENameL}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipCNameL}
                          </p>
                        </div>
                      </div>
                      <div className="card-lip">
                        {/* 背景圖片 */}
                        <img
                          src={result.bgL}
                          alt={result.colorsName}
                          className="lip-img-bg"
                        />

                        {/* 前景圖片（置於上方） */}
                        <img
                          src={result.imgL}
                          alt={result.colorsName}
                          className="lip-img"
                          onLoad={() => setIsImgLoaded(true)} // 圖片載入後，才顯示陰影
                        />
                        {isImgLoaded && (
                          <span className="lip-img-shadow"></span>
                        )}
                      </div>
                    </div>
                    <div className="final-card">
                      <div className="card-up">
                        <img
                          src={result.bgR}
                          alt={result.colorsName}
                          className="card-img"
                        />

                        <div className="card-title">
                          <p
                            className="lipText"
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipColorR}
                          </p>
                          <p
                            className="lipText"
                            style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipENameR}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {result.lipCNameR}
                          </p>
                        </div>
                      </div>
                      <div className="card-lip">
                        {/* 背景圖片 */}
                        <img
                          src={result.bgR}
                          alt={result.colorsName}
                          className="lip-img-bg"
                        />

                        {/* 前景圖片（置於上方） */}
                        <img
                          src={result.imgR}
                          alt={result.colorsName}
                          className="lip-img"
                        />
                        <span className="lip-img-shadow"></span>
                      </div>
                    </div>
                  </div>
                  <div className="lip-detail">
                    <p
                      className="lip-detail-title"
                      style={{
                        backgroundColor: `#${result.color}`,
                      }}
                    >
                      {result.colorsName}
                    </p>
                    <p className="lip-detail-p">
                      {result.text}
                      <span
                        style={{
                          color: `#${result.color}`,
                          fontWeight: "bold",
                        }}
                      >
                        {result.highlight}
                      </span>
                      {result.endText}
                    </p>
                  </div>

                  <button
                    type="primary"
                    onClick={resetTest}
                    className="reset"
                    style={{
                      backgroundColor: `#${result.color}`,
                    }}
                  >
                    重新測驗
                  </button>
                </div>
              ) : (
                <div
                  style={{ maxWidth: 360, margin: "0 auto" }}
                  key={step}
                  className="animated-card"
                >
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "40px",
                      color: "#424242",
                    }}
                  >
                    {currentQuestion.question}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr", // 兩個一排
                      gap: "10px", // 按鈕間距
                    }}
                  >
                    {currentQuestion.options.map((option, index) => {
                      const key = Object.keys(option)[0]; // 取得 A, B, C, D 等 key
                      const value = option[key]; // 取得對應的文字值

                      return (
                        <Button
                          type="default"
                          key={key}
                          style={{
                            backgroundColor:
                              key === select ? "#d22d35" : "#ffffff",
                            color: key === select ? "#ffffff" : "#424242", // 設定按鈕文字顏色為白色，讓顏色更清晰
                            height: "120px", // 調整按鈕高度
                            maxWidth: "175px",
                            minWidth: "152px",
                            width: "100%",
                            borderRadius: "12px", // 設定圓角四方形
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            whiteSpace: "pre-line", // 讓文字自動換行
                            lineHeight: "1.2",
                            padding: "0",
                            border: "none",
                          }}
                          onClick={() => handleSelect(key)} // 傳遞選項的 key (A, B, C, D)
                        >
                          <span
                            style={{
                              fontSize: "12px",
                              // fontWeight: "bold",
                              // textAlign: "center",
                            }}
                          >
                            {value}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                  <Space
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      type="primary"
                      onClick={handleNextStep}
                      disabled={!colorChosen} // 若未選擇顏色，按鈕禁用
                      style={{
                        backgroundColor: colorChosen ? "#d22d35" : "#ed9d8a",
                        color: "#ffffff",
                        padding: "0 2px",
                        borderRadius: "15px",
                        border: "none",
                      }}
                    >
                      <span
                        style={{
                          border: "1px solid #ffffff",
                          padding: "6px 18px",
                          borderRadius: "13px",
                        }}
                      >
                        下一題
                      </span>
                    </Button>
                    {step > 1 && (
                      <Button
                        type="primary"
                        onClick={handlePreviousStep}
                        // disabled={!colorChosen} // 若未選擇顏色，按鈕禁用
                        style={{
                          backgroundColor: "#d22d35",
                          padding: "0 2px",
                          borderRadius: "15px",
                          border: "none",
                        }}
                      >
                        <span
                          style={{
                            border: "1px solid #ffffff",
                            padding: "6px 18px",
                            borderRadius: "13px",
                          }}
                        >
                          上一題
                        </span>
                      </Button>
                    )}
                  </Space>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
