import type { SVGProps } from "react";

const MySQLIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={80}
    height={40}
    viewBox="0 0 512 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="40" width="472" height="176" rx="40" fill="#00758F" />
    <text
      x="256"
      y="150"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="60"
      fontWeight="bold"
    >
      MySQL
    </text>
  </svg>
);

export { MySQLIcon };