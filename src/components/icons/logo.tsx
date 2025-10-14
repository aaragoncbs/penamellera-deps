import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={props.width || 48}
    height={props.height || 48}
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="currentColor"
      d="M152 24a2 2 0 0 0-1.5.7l-64 80a2 2 0 0 0 .1 2.6l48 40a2 2 0 0 0 2.8-1.6l16-88a2 2 0 0 0-1.4-2.3z"
      opacity={0.2}
    />
    <path
      fill="currentColor"
      d="M228.9 204.1 184 128l24.6-43.1a6 6 0 0 0-5.2-9L128 96 52.6 75.9a6 6 0 0 0-5.2 9L72 128l-44.9 76.1a6 6 0 0 0 5.2 9h186.4a6 6 0 0 0 5.2-9Z"
    />
  </svg>
);

export default Logo;
