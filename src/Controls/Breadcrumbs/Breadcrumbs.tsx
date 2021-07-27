import * as React from "react";

interface Crumb {
  title: string;
  action?: Function;
  disabled?: boolean;
}

interface Props {
  /**
   * Array of Crumb to populate breadcrumbs
   */
  crumbs: Array<Crumb>;
}

const Breadcrumbs: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement | null => {
  const { crumbs } = props;

  if (crumbs.length > 0) {
    return (
      <div data-testid="breadcrumbs" className="breadcrumb-container">
        {crumbs.map(({ title, disabled = false, action = () => null }, i) => (
          <React.Fragment key={`${title}_${i}`}>
            {i !== 0 && <div className="breadcrumb-divider">{"/"}</div>}
            <div
              className={`breadcrumb-crumb ${disabled ? "disabled" : ""}`}
              onClick={disabled ? () => null : () => action()}
            >
              {title}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

export default Breadcrumbs;
