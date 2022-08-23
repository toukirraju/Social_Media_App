import React from "react";
import "./TrendCard.css";

import { TrenData } from "../Data/TreandData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>

      {TrenData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}K shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
