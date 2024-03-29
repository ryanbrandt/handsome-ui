import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

import { Chevron } from "../../Svgs";
import { Divider } from "../../Layout";

export const TEST_ID = "dropdown";

interface Props {
  /**
   * Children to be rendered within the open dropdown container
   */
  children: React.ReactNode;

  /**
   * Optional function to execute on open
   */
  onOpen?: Function;

  /**
   * Text to display on the dropdown or JSX to render
   */
  heading?: string | React.ReactNode;

  /**
   * Optional flag to set initial state to open; defaults to closed
   */
  defaultOpen?: boolean;

  /**
   * Optional flag to set a bottom divider; defaults false
   */
  dividerBottom?: boolean;

  /**
   * Optional flag to set a top divider; defaults false
   */
  dividerTop?: boolean;

  /**
   * Optional additional heading CSS classes
   */
  headingClasses?: string;

  /**
   * Optional open content container styles
   */
  contentClasses?: string;
}

interface State {
  open: boolean;
}

class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { defaultOpen } = props;

    this.state = {
      open: defaultOpen ? defaultOpen : false,
    };
  }

  _handleToggle = (): void => {
    const { onOpen } = this.props;

    this.setState(
      (prevState: State) => {
        const { open } = prevState;

        return { open: !open };
      },
      () => {
        const { open } = this.state;

        if (onOpen && open) {
          onOpen();
        }
      }
    );
  };

  render() {
    const {
      heading,
      children,
      headingClasses,
      contentClasses,
      dividerBottom,
      dividerTop,
    } = this.props;
    const { open } = this.state;

    const header =
      typeof heading === "string" ? (
        <div
          className={combineClassNames(
            "dropdown_container_heading",
            headingClasses
          )}
        >
          {heading}
        </div>
      ) : (
        heading
      );

    return (
      <div data-testid={TEST_ID} className="dropdown_container">
        {dividerTop && <Divider className="dropdown_container_divider_top" />}
        <div
          className="dropdown_container_masthead"
          onClick={this._handleToggle}
        >
          {header}
          <Chevron
            width={15}
            height={15}
            transform={open ? "" : "rotate(180)"}
          />
        </div>
        <div
          className={combineClassNames(
            open ? "dropdown-open" : "dropdown-closed",
            contentClasses
          )}
        >
          {children}
        </div>
        {dividerBottom && (
          <Divider className="dropdown_container_divider_bottom" />
        )}
      </div>
    );
  }
}

export default Dropdown;
