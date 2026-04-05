import { useId } from 'react';

/** Brands not covered by Simple Icons (react-icons/si). */

export const AnchorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="40" height="40" rx="8" fill="#512DA8" />
    <path
      d="M20 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      fill="white"
    />
    <path d="M20 16v16m-8-6c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none" />
    <path d="M12 28h16" stroke="white" strokeWidth="2" />
  </svg>
);

export const PhantomIcon = () => {
  const gid = useId().replace(/:/g, '');
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="40" height="40" rx="8" fill={`url(#p-${gid})`} />
      <path
        d="M20 8C13 8 8 13.5 8 20v6c0 3 2 6 6 6h12c3 0 6-3 6-6v-6c0-6.5-5-12-12-12z"
        fill="white"
      />
      <ellipse cx="16" cy="18" rx="1.5" ry="2" fill="#AB9FF2" />
      <ellipse cx="24" cy="18" rx="1.5" ry="2" fill="#AB9FF2" />
      <path d="M14 25c3 2 9 2 12 0" stroke="#AB9FF2" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id={`p-${gid}`} x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#534BB1" />
          <stop offset="1" stopColor="#AB9FF2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const JupiterIcon = () => {
  const gid = useId().replace(/:/g, '');
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="20" cy="20" r="20" fill={`url(#j-${gid})`} />
      <path d="M20 8l8 12H12l8-12z" fill="white" />
      <path d="M20 32l-8-12h16l-8 12z" fill="white" fillOpacity="0.8" />
      <circle cx="20" cy="20" r="4" fill="white" />
      <defs>
        <radialGradient id={`j-${gid}`}>
          <stop stopColor="#FBA43A" />
          <stop offset="1" stopColor="#FF6B35" />
        </radialGradient>
      </defs>
    </svg>
  );
};
