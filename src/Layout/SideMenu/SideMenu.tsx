import * as React from "react";

import { MenuOption } from "../types";

import SideDrawer from "../SideDrawer/SideDrawer";
import { BurgerMenu } from "../../Svgs";

import "./index.css";

interface Props {
  options: Array<MenuOption>;
}

const SideMenu: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOptionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    option: MenuOption
  ): void => {
    e.stopPropagation();
    option.action();

    setOpen(false);
  };

  const _computeOptionClassName = (option: MenuOption): string => {
    return option.active
      ? "sidemenu_option-active"
      : "sidemenu_option handsome_inverting";
  };

  const _renderOptions = (): React.ReactNode => {
    const { options } = props;

    return options.map((option, i) => (
      <div
        onClick={(e) => handleOptionClick(e, option)}
        className={_computeOptionClassName(option)}
        key={`${option}_${i}`}
      >
        <div className="sidemenu_option-content">{option.name}</div>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <div className="handsome_menu">
        <BurgerMenu
          className={open ? "handsome_menu-icon-active" : "handsome_menu-icon"}
          onClick={() => setOpen(true)}
        />
      </div>
      <SideDrawer onClose={() => setOpen(false)} visible={open}>
        {open && (
          <div className="sidemenu_container">
            <div className="handsome_flex-center-col">{_renderOptions()}</div>
          </div>
        )}
      </SideDrawer>
    </React.Fragment>
  );
};

export default SideMenu;
