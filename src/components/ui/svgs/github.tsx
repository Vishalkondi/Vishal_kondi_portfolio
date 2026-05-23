import type { SVGProps } from "react";

const GithubIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={70}
    height={70}
    viewBox="0 0 256 256"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="110" fill="#181717" />
    <path
      d="M128 60c-38 0-68 30-68 68 0 30 19 56 45 65 3 1 4-1 4-3v-12c-18 4-22-8-22-8-3-7-7-9-7-9-6-4 0-4 0-4 7 1 10 7 10 7 6 10 16 7 20 5 1-5 3-7 5-9-14-2-29-7-29-32 0-7 2-12 7-17-1-2-3-9 1-18 0 0 6-2 18 7 5-1 10-2 15-2s10 1 15 2c12-9 18-7 18-7 4 9 2 16 1 18 5 5 7 10 7 17 0 25-15 30-29 32 3 3 6 7 6 14v20c0 2 1 4 4 3 26-9 45-35 45-65 0-38-30-68-68-68z"
      fill="#ffffff"
    />
  </svg>
);

export { GithubIcon };