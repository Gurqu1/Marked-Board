import React from 'react';
interface ResumeScoreProps {
  score: number;
  darkMode: boolean;
}
const ResumeScore = ({
  score,
  darkMode
}: ResumeScoreProps) => {
  const getScoreLabel = () => {
    if (score >= 80) return 'Great Fit';
    if (score >= 60) return 'Good Fit';
    if (score >= 40) return 'Average Fit';
    return 'Needs Improvement';
  };
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };
  const scoreLabel = getScoreLabel();
  const scoreColor = getScoreColor();
  return <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className="text-xl font-semibold mb-4">Resume Readiness Score</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl font-bold">
          <span className={scoreColor}>{score}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            /100
          </span>
        </span>
        <span className={`text-sm font-medium ${scoreColor} px-3 py-1 rounded-full bg-opacity-20 ${scoreColor.replace('text', 'bg')}`}>
          {scoreLabel}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
        <div className={`h-2.5 rounded-full ${score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-blue-600' : score >= 40 ? 'bg-yellow-500' : 'bg-red-600'}`} style={{
        width: `${score}%`
      }}></div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>Click for detailed breakdown of your resume score.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Skill match: {score >= 70 ? 'Strong' : 'Needs improvement'}</li>
          <li>
            Experience relevance:{' '}
            {score >= 60 ? 'Relevant' : 'Could be better aligned'}
          </li>
          <li>
            Keyword presence: {score >= 75 ? 'Good' : 'Missing key terms'}
          </li>
        </ul>
      </div>
    </div>;
};
export default ResumeScore;