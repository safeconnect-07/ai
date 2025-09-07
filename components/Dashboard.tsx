
import React from 'react';
import type { AnalysisReport } from '../types';
import { Loader } from './Loader';
import { ScoreGauge } from './ScoreGauge';
import { AnalysisResult } from './AnalysisResult';
import { BugTrendChart } from './BugTrendChart';

interface DashboardProps {
  report: AnalysisReport | null;
  isLoading: boolean;
  error: string | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ report, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-800/50 rounded-lg p-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-white">Analysis Failed</h3>
          <p className="text-slate-400 mt-2 text-center">{error}</p>
        </div>
      );
    }

    if (!report) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-800/50 rounded-lg p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8z" />
          </svg>
          <h3 className="text-xl font-semibold text-white">Awaiting Analysis</h3>
          <p className="text-slate-400 mt-2">Enter your code and click "Analyze Code" to see the results here.</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-slate-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
             <h3 className="text-lg font-semibold text-white mb-2">Code Quality Score</h3>
            <ScoreGauge score={report.score} />
          </div>
          <div className="md:col-span-2 bg-slate-800 p-4 rounded-lg shadow-lg">
             <h3 className="text-lg font-semibold text-white mb-2">Bug Prediction Trend</h3>
            <BugTrendChart issues={report.issues} />
          </div>
        </div>
        <AnalysisResult summary={report.summary} issues={report.issues} />
      </div>
    );
  };
  
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 min-h-[550px] h-full">
      {renderContent()}
    </div>
  );
};
