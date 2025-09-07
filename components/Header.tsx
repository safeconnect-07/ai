
import React from 'react';
import { RobotIcon } from './icons/RobotIcon';

export const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center gap-4">
        <RobotIcon className="w-10 h-10 text-cyan-400" />
        <h1 className="text-2xl font-bold text-white tracking-tight">
          AI Code Review <span className="text-slate-400">&</span> Bug Prediction Tool
        </h1>
      </div>
    </header>
  );
};
