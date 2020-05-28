import * as React from "react";

function BurgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <title>{"BurgerMenu.Icon"}</title>
      <defs>
        <filter
          x="-.2%"
          y="-3.6%"
          width="100.5%"
          height="110.1%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={1}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="prefix__b" d="M0 0h1440v69H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-29 -22)">
          <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <use fill="#FFF" xlinkHref="#prefix__b" />
        </g>
        <g fill="#03283B">
          <path d="M0 0h25v5H0zM0 10h25v5H0zM0 20h25v5H0z" />
        </g>
      </g>
    </svg>
  );
}

export default BurgerMenu;
