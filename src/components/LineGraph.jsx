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
import "./LineGraph.css"

const LineGraph = ({ score, percentile }) => {
  const data = [
    { score: 15, percentile: 100 },
    { score: 14, percentile: 99 },
    { score: 13, percentile: 98 },
    { score: 12, percentile: 95 },
    { score: 11, percentile: 90 },
    { score: 10, percentile: 85 },
    { score: 1, percentile: 5 },
    { score: 5, percentile: 50 },
    { score: score, percentile: percentile },
    // Add more data points here
  ];

  const xTicks = Array.from({ length: 6 }, (_, i) => i * 20);
  const averageReference = 72;

  const sortedData = data.sort((a,b) => a.percentile - b.percentile)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
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
        <XAxis dataKey={"percentile"} type="number" />
        <YAxis hide dataKey={"score"} />
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#8884d8"
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
        <ReferenceLine
          x={percentile}
          stroke="blue"
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
