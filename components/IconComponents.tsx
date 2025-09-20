
import React from 'react';

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const LungsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-3.31 0-6 2.69-6 6v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-4.42 3.58-8 8-8s8 3.58 8 8v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-3.31-2.69-6-6-6zm-3 10v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-6H9zm-2 0H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v-8zm10 0v8h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-2z" />
  </svg>
);

export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .55 0 1 .45 1 1s-.45 1-1 1zm7-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-8-4C8.24 7 7 8.24 7 9.75S8.24 12.5 9.75 12.5 12.5 11.26 12.5 9.75 11.26 7 9.75 7z" />
  </svg>
);
