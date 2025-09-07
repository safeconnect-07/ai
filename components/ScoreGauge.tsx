
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

interface ScoreGaugeProps {
  score: number;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const getColor = (value: number) => {
    if (value >= 85) return '#22c55e'; // green-500
    if (value >= 60) return '#f59e0b'; // amber-500
    return '#ef4444'; // red-500
  };

  const color = getColor(score);
  const data = [{ name: 'score', value: score, fill: color }];

  return (
    <div style={{ width: '100%', height: 180 }}>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
          barSize={20}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            angleAxisId={0}
            cornerRadius={10}
            className="fill-slate-700"
          />
          <text
            x="50%"
            y="75%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white font-bold text-5xl"
          >
            {score}
          </text>
           <text
            x="50%"
            y="95%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-400 text-sm"
          >
            / 100
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
