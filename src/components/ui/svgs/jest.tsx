import type { SVGProps } from "react";

const JestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="120" fill="#C21325" />
    
    {/* Simplified Jest logo (3 nodes style) */}
    <circle cx="128" cy="70" r="18" fill="#fff" />
    <circle cx="80" cy="150" r="18" fill="#fff" />
    <circle cx="176" cy="150" r="18" fill="#fff" />
    
    <line x1="128" y1="88" x2="80" y2="132" stroke="#fff" strokeWidth="10" />
    <line x1="128" y1="88" x2="176" y2="132" stroke="#fff" strokeWidth="10" />
    <line x1="80" y1="168" x2="176" y2="168" stroke="#fff" strokeWidth="10" />
  </svg>
);

export { JestIcon };