import * as React from "react";

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} {...props}>
      <title>{"Code"}</title>
      <text
        y={35}
        x={48}
        strokeWidth={0}
        fontSize={36}
        fontFamily="Monospace"
        textAnchor="middle"
        stroke="#000"
      >
        {"&lt;/&gt;"}
      </text>
    </svg>
  );
}

export default Code;
