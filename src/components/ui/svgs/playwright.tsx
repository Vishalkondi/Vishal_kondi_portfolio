import type { SVGProps } from "react";

const PlaywrightIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 512 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      x="20"
      y="40"
      width="472"
      height="176"
      rx="40"
      fill="#2EAD33"   // ✅ ADD COLOR
    />

    {/* Text */}
    <text
      x="256"
      y="150"
      textAnchor="middle"
      fill="#fff"      // ✅ ADD COLOR
      fontSize="80"    // ✅ ADD SIZE
      fontWeight="bold"
    >
      PW
    </text>
  </svg>
);

export { PlaywrightIcon };