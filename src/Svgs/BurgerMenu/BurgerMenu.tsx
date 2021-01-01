import * as React from "react";

function BurgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <g>
        <path d="M0 0h25v5H0zM0 10h25v5H0zM0 20h25v5H0z" />
      </g>
    </svg>
  );
}

export default BurgerMenu;
