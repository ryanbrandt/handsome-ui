import * as React from "react";

import "./index.css";

interface Crumb {
  title: string;
  action: Function;
  disabled?: boolean;
}

interface Props {
  /**
   * Array of Crumb to populate breadcrumbs
   */
  crumbs: Array<Crumb>;

  /**
   * Optional flag to show/hide
   */
  show?: boolean;
}

const Breadcrumbs: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element | null => {
  const { crumbs, show = true } = props;

  if (show) {
    return (
      <div className="breadcrumb-container">
        {crumbs.map((crumb, i) => (
          <React.Fragment key={`${crumb.title}_${i}`}>
            {i !== 0 && <div className="breadcrumb-divider">/</div>}
            <div
              className={`breadcrumb-crumb ${crumb.disabled ? "disabled" : ""}`}
              onClick={crumb.disabled ? () => null : () => crumb.action()}
            >
              {crumb.title}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

export default Breadcrumbs;
