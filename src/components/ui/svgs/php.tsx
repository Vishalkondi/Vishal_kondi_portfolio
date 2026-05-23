import type { SVGProps } from "react";

const PhpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={120}
    height={60}
    viewBox="0 0 512 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="256" cy="128" rx="240" ry="100" fill="#777BB4" />
    <text
      x="256"
      y="140"
      textAnchor="middle"
      fill="#fff"
      fontSize="100"   // 👈 increased text size
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      PHP
    </text>
  </svg>
);

export { PhpIcon };