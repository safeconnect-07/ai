
import React from 'react';

export const BugIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400" {...props}>
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 9 3 7.4 3 5.5S4.6 2 6.5 2" />
    <path d="M17.47 9c1.9 0 3.5-1.6 3.5-3.5S19.4 2 17.5 2" />
  </svg>
);

export const VulnerabilityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400" {...props}>
    <path d="M14.5 4c-2.3 0-4.4 1.2-5.5 3.2-1.2 2-.9 4.8 1 6.8 1.9 2 4.6 2.7 6.8 1.5 2.2-1.2 3.2-3.8 2.7-6.2" />
    <path d="m12 12.5 1 1" />
    <path d="m8 8.5 1 1" />
    <path d="M12.5 21.5 12 22l-1-1" />
    <path d="M16 16.5 15.5 17l-1-1" />
    <path d="m20 20-2-2" />
    <path d="m2 2 4 4" />
    <path d="m20 12-2-2" />
    <path d="M12 2 9.5 4.5" />
    <path d="M2 12h3" />
    <path d="M19 12h3" />
  </svg>
);

export const CodeSmellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400" {...props}>
    <path d="M12 5C2.9 5 2.1 11.3.4 13" />
    <path d="M12 5C21.1 5 21.9 11.3 23.6 13" />
    <path d="M12 5v14" />
    <path d="M8 19c-2.5-2-4-5-4-9" />
    <path d="M16 19c2.5-2 4-5 4-9" />
  </svg>
);
