import type { SVGProps } from "react";

const AwsIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={90}
    height={50}
    viewBox="0 0 512 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="256"
      y="120"
      textAnchor="middle"
      fill="#232F3E"
      fontSize="80"
      fontWeight="bold"
    >
      AWS
    </text>

    <path
      d="M150 160 Q256 220 362 160"
      fill="none"
      stroke="#FF9900"
      strokeWidth="12"
      strokeLinecap="round"
    />
  </svg>
);

export { AwsIcon };