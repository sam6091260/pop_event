import React from "react";
import "./style.css";

const Progress = ({ step, totalSteps }) => {
  return (
    <div className="progress-container">
      <div className="steps-container">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="step-item">
            <div
              className={`step-circle ${index + 1 <= step ? "active" : ""}`}
            ></div>
            {index < totalSteps - 1 && (
              <div
                className={`step-line ${index + 1 < step ? "active" : ""}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
