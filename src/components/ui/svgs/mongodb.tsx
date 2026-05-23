import type { SVGProps } from "react";

const MongoDBIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={80}   // 👈 increased default width
    height={80}  // 👈 increased default height
    viewBox="0 0 256 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="110" fill="#13AA52" />
    <path
      d="M128 40 C110 80, 110 140, 128 200 C146 140, 146 80, 128 40 Z"
      fill="#ffffff"
    />
  </svg>
);

export { MongoDBIcon };