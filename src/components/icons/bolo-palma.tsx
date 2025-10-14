import { SVGProps } from "react";

export function BoloPalmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 13a3 3 0 0 0 3-3V4a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
      <path d="M13.5 13h-3" />
      <path d="M14 13.5c-1 1-2 2-2 3.5v4" />
      <path d="M10 13.5c1 1 2 2 2 3.5v4" />
      <path d="M14 21h-4" />
    </svg>
  );
}
