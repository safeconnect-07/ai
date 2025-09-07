
import React, { useState, useCallback } from 'react';
import { CodeInput } from './components/CodeInput';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { analyzeCode } from './services/geminiService';
import type { AnalysisReport } from './types';
import { DEFAULT_CODE, LANGUAGES } from './constants';

const App: React.FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_CODE.python);
  const [language, setLanguage] = useState<string>(LANGUAGES[1].id);
  const [analysisReport, setAnalysisReport] = useState<AnalysisReport | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLanguageChange = useCallback((newLanguage: string) => {
    setLanguage(newLanguage);
    const newDefaultCode = DEFAULT_CODE[newLanguage as keyof typeof DEFAULT_CODE] || '';
    setCode(newDefaultCode);
    setAnalysisReport(null);
    setError(null);
  }, []);

  const handleAnalyzeClick = async () => {
    if (!code.trim()) {
      setError("Code cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisReport(null);

    try {
      const result = await analyzeCode(code, language);
      setAnalysisReport(result);
    } catch (err) {
      console.error("Error analyzing code:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred. Check the console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <CodeInput
              code={code}
              setCode={setCode}
              language={language}
              onLanguageChange={handleLanguageChange}
              onAnalyze={handleAnalyzeClick}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-7">
            <Dashboard
              report={analysisReport}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-xs text-slate-500">
        <p>Powered by Gemini API. Designed by a world-class senior frontend React engineer.</p>
      </footer>
    </div>
  );
};

export default App;
