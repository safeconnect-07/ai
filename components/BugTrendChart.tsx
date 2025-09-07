
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Issue } from '../types';
import { IssueType } from '../types';

interface BugTrendChartProps {
    issues: Issue[];
}

const MOCK_HISTORICAL_DATA = [
  { commit: 'C1', bugs: 5, vulnerabilities: 2, codeSmells: 8 },
  { commit: 'C2', bugs: 6, vulnerabilities: 1, codeSmells: 7 },
  { commit: 'C3', bugs: 4, vulnerabilities: 1, codeSmells: 9 },
  { commit: 'C4', bugs: 3, vulnerabilities: 2, codeSmells: 5 },
  { commit: 'C5', bugs: 2, vulnerabilities: 0, codeSmells: 4 },
];

export const BugTrendChart: React.FC<BugTrendChartProps> = ({ issues }) => {
  const currentBugs = issues.filter(i => i.type === IssueType.Bug).length;
  const currentVulnerabilities = issues.filter(i => i.type === IssueType.Vulnerability).length;
  const currentCodeSmells = issues.filter(i => i.type === IssueType.CodeSmell).length;

  const chartData = [
      ...MOCK_HISTORICAL_DATA,
      { commit: 'Current', bugs: currentBugs, vulnerabilities: currentVulnerabilities, codeSmells: currentCodeSmells }
  ];

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis dataKey="commit" tick={{ fill: '#94a3b8' }} fontSize={12} />
          <YAxis tick={{ fill: '#94a3b8' }} fontSize={12} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              borderColor: '#334155',
              borderRadius: '0.5rem'
            }}
            labelStyle={{ color: '#cbd5e1' }}
          />
          <Legend wrapperStyle={{fontSize: "12px"}}/>
          <Line type="monotone" name="Bugs" dataKey="bugs" stroke="#ef4444" strokeWidth={2} dot={{r: 4}} activeDot={{ r: 6 }} />
          <Line type="monotone" name="Vulnerabilities" dataKey="vulnerabilities" stroke="#f59e0b" strokeWidth={2} dot={{r: 4}} activeDot={{ r: 6 }} />
          <Line type="monotone" name="Code Smells" dataKey="codeSmells" stroke="#3b82f6" strokeWidth={2} dot={{r: 4}} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
