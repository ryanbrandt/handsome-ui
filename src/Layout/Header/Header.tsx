import * as React from "react";

import { useIsMobile } from "../../hooks";

import { MenuOption } from "../../Layout";

import MobileHeader from "./MobileHeader";
import DefaultHeader from "./DefaultHeader";
export interface Props {
  /**
   * JSX to be rendered within the menu
   */
  options: Array<MenuOption>;
}

export interface SubHeaderProps extends Props {
  onItemClick: (option: MenuOption, callback: () => void) => void;
}

const Header: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const isMobile = useIsMobile();

  const handleItemClick = (option: MenuOption, callback: () => void): void => {
    const { action } = option;

    action();
    callback();
  };

  const { options } = props;

  if (isMobile) {
    return <MobileHeader options={options} onItemClick={handleItemClick} />;
  }

  return <DefaultHeader options={options} onItemClick={handleItemClick} />;
};

export default Header;
