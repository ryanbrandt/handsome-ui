import * as React from "react";
import { Row } from "../../Layout";

import "./index.css";

interface Crumb {
  title: string;
  action: Function;
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
      <Row version={0}>
        {crumbs.map((crumb, i) => (
          <div className="breadcrumb-container">
            {i !== 0 && <div className="breadcrumb-divider">/</div>}
            <div className="breadcrumb-crumb" onClick={() => crumb.action()}>
              {crumb.title}
            </div>
          </div>
        ))}
      </Row>
    );
  }

  return null;
};

export default Breadcrumbs;
