
import React from 'react';
import type { Issue } from '../types';
import { IssueType } from '../types';
import { BugIcon, VulnerabilityIcon, CodeSmellIcon } from './icons/IssueIcons';

interface AnalysisResultProps {
  summary: string;
  issues: Issue[];
}

const issueConfig = {
  [IssueType.Bug]: {
    Icon: BugIcon,
    color: 'red',
    title: 'Bugs'
  },
  [IssueType.Vulnerability]: {
    Icon: VulnerabilityIcon,
    color: 'orange',
    title: 'Vulnerabilities'
  },
  [IssueType.CodeSmell]: {
    Icon: CodeSmellIcon,
    color: 'blue',
    title: 'Code Smells'
  },
};

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const config = issueConfig[issue.type];
  const colorClasses = {
    red: 'border-red-500/50 bg-red-500/10',
    orange: 'border-orange-500/50 bg-orange-500/10',
    blue: 'border-blue-500/50 bg-blue-500/10',
  }[config.color] || 'border-gray-500/50 bg-gray-500/10';

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${colorClasses}`}>
      <div className="flex justify-between items-start">
        <p className="text-sm text-slate-300 font-semibold">
          Line {issue.line}: <span className="text-white">{issue.description}</span>
        </p>
      </div>
      <div className="mt-3 bg-slate-900/50 p-3 rounded-md">
        <p className="text-xs text-cyan-300 font-semibold mb-1">Suggestion:</p>
        <p className="text-sm text-slate-300 font-mono whitespace-pre-wrap">{issue.suggestion}</p>
      </div>
    </div>
  );
};

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ summary, issues }) => {
  if (issues.length === 0) {
    return (
      <div className="bg-slate-800 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-400">Excellent!</h3>
        <p className="text-slate-300 mt-2">{summary}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-white">Analysis Summary</h3>
      <p className="text-slate-400 mt-1 mb-6 border-l-2 border-cyan-500 pl-3">{summary}</p>
      
      <div className="space-y-6">
        {Object.values(IssueType).map(type => {
          const filteredIssues = issues.filter(issue => issue.type === type);
          if (filteredIssues.length === 0) return null;

          const config = issueConfig[type];
          return (
            <div key={type}>
              <div className="flex items-center gap-3 mb-3">
                <config.Icon className="w-6 h-6" />
                <h4 className="text-lg font-bold text-white">{config.title} ({filteredIssues.length})</h4>
              </div>
              <div className="space-y-4">
                {filteredIssues.map((issue, index) => (
                  <IssueCard key={index} issue={issue} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
