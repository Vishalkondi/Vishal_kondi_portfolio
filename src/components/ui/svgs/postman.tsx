import type { SVGProps } from "react";

const PostmanIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={70}
    height={70}
    viewBox="0 0 256 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="110" fill="#FF6C37" />

    <path
      d="M90 160 L170 100 L150 180 Z"
      fill="#ffffff"
    />
  </svg>
);

export { PostmanIcon };