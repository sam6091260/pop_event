import React from "react";
import { Progress, Steps } from "antd";
import "./style.css";

const QuizProgress = ({ step, totalSteps }) => {
  // console.log("step", step);
  // console.log("totalSteps", totalSteps);
  const progress = (step / totalSteps) * 100;

  return (
    // <Progress
    //   percent={progress}
    //   status="active"
    //   showInfo={false}
    //   strokeWidth={2}
    //   strokeColor={{
    //     "0%": "#F2DADE",
    //     "100%": "#E5948B",
    //   }}
    // />
    <Steps
      current={step - 1}
      direction="horizontal"
      size="small"
      progressDot={(icon, { index }) => (
        <span className={`custom-dot ${index < step ? "active" : ""}`} />
      )}
      className="custom-steps"
      items={Array.from({ length: totalSteps }, () => ({}))}
    />
  );
};

export default QuizProgress;
