import type { SVGProps } from "react";

const LaravelIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="laravel-shape">
      <path
        d="M128 20 L220 75 L220 180 L128 235 L36 180 L36 75 Z"
        fill="#FF2D20"
      />
      <text
        x="128"
        y="145"
        textAnchor="middle"
        className="laravel-text"
      >
        LARAVEL
      </text>
    </g>
  </svg>
);

export { LaravelIcon };