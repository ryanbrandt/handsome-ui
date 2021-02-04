import * as React from "react";

import AppContext from "../../Containers/AppContainer/AppContext";

import "./index.css";

interface Props {
  /**
   * Flag controlling visibility of the side drawer
   */
  visible: boolean;

  /**
   * Children to be rendered within the side drawer
   */
  children: React.ReactNode;

  /**
   * Optional function to execute on side drawer close click.
   * If undefined, close button is not displayed.
   */
  onClose?: Function;

  /**
   * Optional prop to customize the side on which the drawer appears
   * Defaults left
   */
  side?: "left" | "right";
}

const SideDrawer: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const isMobile = React.useContext(AppContext);

  const { visible, onClose } = props;

  const handleForegroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const _computeDrawerClassName = (): string => {
    const { side } = props;
    let drawerClassName = "side_drawer-drawer-hidden";
    if (visible) {
      let mobileModifier = "";
      if (isMobile) {
        mobileModifier = "-mobile";
      }

      drawerClassName = `side_drawer-drawer${mobileModifier} handsome_scroll`;
    }

    let sideModifier = "drawer-left";
    if (side) {
      sideModifier = `drawer-${side}`;
    }

    return `${drawerClassName} ${sideModifier}`;
  };

  const _renderCloseButton = (): React.ReactNode => {
    if (onClose && visible) {
      return (
        <div onClick={() => onClose()} className="side_drawer-close-btn">
          X
        </div>
      );
    }

    return null;
  };

  const { children } = props;

  let containerClassName = "side_drawer-container-hidden";
  if (visible) {
    containerClassName = "side_drawer-container";
  }

  const foregroundClickFn = visible ? handleForegroundClick : undefined;

  return (
    <div onClick={foregroundClickFn} className={containerClassName}>
      <div className={_computeDrawerClassName()}>
        {_renderCloseButton()}
        {children}
      </div>
    </div>
  );
};

export default SideDrawer;
