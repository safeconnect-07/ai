
import React from 'react';
import { LANGUAGES } from '../constants';
import { AnalyzeIcon } from './icons/AnalyzeIcon';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  onLanguageChange: (language: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({
  code,
  setCode,
  language,
  onLanguageChange,
  onAnalyze,
  isLoading,
}) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-1 h-full flex flex-col">
      <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-t-md">
        <h2 className="text-lg font-semibold text-white">Code Inspector</h2>
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-auto p-2"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex-grow">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-full p-4 bg-transparent text-gray-300 font-mono text-sm resize-none focus:outline-none absolute inset-0"
          style={{ minHeight: '400px' }}
        />
      </div>
      <div className="p-3 border-t border-slate-700/50">
        <button
          onClick={onAnalyze}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-all duration-200 shadow-md hover:shadow-cyan-500/30"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            <>
              <AnalyzeIcon className="w-5 h-5" />
              Analyze Code
            </>
          )}
        </button>
      </div>
    </div>
  );
};
