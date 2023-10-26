import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import "./LineGraph.css";

const LineGraph = ({ score, percentile }) => {
  const data = [
    { score: 15, percentile: 100 },
    { score: 14, percentile: 99 },
    { score: 13, percentile: 98 },
    { score: 12, percentile: 95 },
    { score: 11, percentile: 90 },
    { score: 10, percentile: 85 },
    { score: 1, percentile: 5 },
    { score: 6, percentile: 50 },
    { score: score, percentile: percentile },
    // Add more data points here
  ];

  const xTicks = Array.from({ length: 6 }, (_, i) => i * 20);
  const averageReference = 72;

  const sortedData = data.sort((a, b) => a.percentile - b.percentile);
  const formatXAxis = (tickItem) => {
    return `${tickItem}%`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length && label === percentile) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}% Percentile`}</p>
          <p className="desc">Your Score</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={sortedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey={"percentile"}
          type="number"
          domain={[0, 100]}
          tickLine={false}
          tickFormatter={formatXAxis}
        />
        <YAxis dataKey={"score"} hide />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#438AF6"
          activeDot={{ r: 8 }}
        />
        <ReferenceDot
          x={averageReference}
          y={20}
          r={8}
          fill="orange"
          stroke="none"
        />
        <ReferenceLine
          x={averageReference}
          stroke="orange"
          strokeDasharray="5 5"
        />
        <ReferenceLine x={percentile} stroke="#438AF6" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
