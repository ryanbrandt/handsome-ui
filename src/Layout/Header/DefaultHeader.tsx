import * as React from "react";

import { SubHeaderProps as Props } from "./Header";
import { BurgerMenu } from "../../Svgs";

const DefaultHeader: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const { options, onItemClick } = props;

  const _renderDefaultOptions = (): React.ReactNode => {
    return (
      <React.Fragment>
        <div onClick={() => setMenuOpen(false)} className="app_menu-escape">
          X
        </div>
        <div className="app_menu-options app_menu">
          {options.map((option) => (
            <span
              key={option.name}
              className={
                option.active
                  ? "app_menu_active medium_text"
                  : "app_menu_option medium_text"
              }
              onClick={() => onItemClick(option, () => setMenuOpen(false))}
            >
              {option.name}
            </span>
          ))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="app_header">
      <BurgerMenu
        className={menuOpen ? "app_menu-icon-active" : "app_menu-icon"}
        onClick={() => setMenuOpen(true)}
      />
      <div className={menuOpen ? "app_menu-open" : "app_menu-closed"}>
        {_renderDefaultOptions()}
      </div>
    </div>
  );
};

export default DefaultHeader;
