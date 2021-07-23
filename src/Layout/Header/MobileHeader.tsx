import * as React from "react";

import { SubHeaderProps as Props } from "./Header";

import { BurgerMenu } from "../../Svgs";
import { Column } from "../../Layout";

const MobileHeader: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { options, onItemClick } = props;

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const _renderMobileItems = (): React.ReactNode => {
    return (
      <React.Fragment>
        <div className="app_mobile-escape" onClick={() => setMenuOpen(false)}>
          X
        </div>
        <div className="app_mobile-content">
          <Column>
            {options.map(
              (option) =>
                !option.active && (
                  <h1
                    key={option.name}
                    onClick={() =>
                      onItemClick(option, () => setMenuOpen(false))
                    }
                  >
                    {option.name}
                  </h1>
                )
            )}
          </Column>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="app_header app_header-mobile">
        <div className="app_mobile_icon">
          <BurgerMenu onClick={() => setMenuOpen(true)} />
        </div>
      </div>
      <div className={`app_mobile_menu ${menuOpen ? "open" : "closed"}`}>
        {_renderMobileItems()}
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;
