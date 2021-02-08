import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Children to be rendered within the open dropdown container
     */
    children: React.ReactNode;
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
declare class Dropdown extends React.Component<Props, State> {
    constructor(props: Props);
    _handleToggle: () => void;
    render(): JSX.Element;
}
export default Dropdown;
