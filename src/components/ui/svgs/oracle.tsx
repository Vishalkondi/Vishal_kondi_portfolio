import type { SVGProps } from "react";

const OracleIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
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
      className="oracle-bg"
    />

    {/* Text */}
    <text
      x="256"
      y="140"
      textAnchor="middle"
      className="oracle-text"
    >
      ORACLE
    </text>
  </svg>
);

export { OracleIcon };