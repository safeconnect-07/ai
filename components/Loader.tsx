
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-white font-semibold">Analyzing Code...</p>
      <p className="text-slate-400">The AI is reviewing your submission. Please wait.</p>
    </div>
  );
};
