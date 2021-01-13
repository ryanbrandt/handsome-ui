import * as React from "react";

function Chevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z" />
    </svg>
  );
}

export default Chevron;
