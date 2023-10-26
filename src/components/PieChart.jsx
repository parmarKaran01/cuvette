import React from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import Target from "../assets/target.svg";
import "./PieChart.css"

const PieChart = ({ value, limit }) => {
  const data = [{ name: "L1", value: value }];

  const circleSize = 80;
  return (
    <div className="piechartWrapper">
      <ResponsiveContainer width="99%" height={300}>
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          innerRadius={80}
          outerRadius={80}
          barSize={30}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, limit]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey="value"
            //   cornerRadius={circleSize / 2}
            fill="#438AF6"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <img src={Target} className="targetIcon" />
    </div>
  );
};

export default PieChart;
